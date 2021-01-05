import { useRef, createContext, useReducer, useCallback } from "react"
import { mergeRefs } from "@rent_avail/utils"

export const CarouselContext = createContext()

/**
 * Just turning useReducer into something more like the old setState.
 */
const cb = (state, newState) => ({
  ...state,
  ...(typeof newState === "function" ? newState(state) : newState),
})

function useSafeState(intialState) {
  return useReducer(cb, intialState)
}

export function Unsafe_useCarouselContainer({ ref, ...props }) {
  const innerRef = useRef(null)
  const [state, setState] = useSafeState({
    currentIdx: 0,
    carouselItems: [],
  })
  /**
   * Register is called by each child as it's mounted, making building the
   * references trivial, but requiring some comparison when adding to an array.
   */
  const register = useCallback((newEl) => {
    if (!newEl) return
    setState(({ carouselItems: prevEls }) => {
      const exists = prevEls.find((i) => i === newEl)
      const itemIdx = prevEls.findIndex((i) =>
        Boolean(
          /**
           * This expression checks to see if the newEl is above or below the
           * current item in the find loop. compareDocumentPosition returns a
           * bitmask, so to coerce it to a number we need to check to see if
           * bitwise AND will return greater than 0.
           */
          // eslint-disable-next-line no-bitwise
          i.compareDocumentPosition(newEl) & Node.DOCUMENT_POSITION_PRECEDING
        )
      )
      if (exists) return { carouselItems: prevEls }
      if (itemIdx >= 0)
        return {
          carouselItems: [
            ...prevEls.slice(0, itemIdx),
            newEl,
            ...prevEls.slice(itemIdx),
          ],
        }
      return { carouselItems: [...prevEls, newEl] }
    })
  })

  /**
   * Deregister just removes the appropriate element from the array, I suppose
   * we could just pass the index here but I can't imagine this being called
   * except for the useEffect hook.
   */
  const deregister = useCallback((removeEl) => {
    if (removeEl) {
      setState(({ carouselItems: prevEls }) => {
        const removeIdx = prevEls.findIndex((el) => removeEl === el)
        return { carouselItems: [...prevEls.splice(removeIdx, 1)] }
      })
    }
  })

  return {
    ...props,
    ref: mergeRefs(ref, innerRef),
    carouselProps: {
      ...state,
      container: innerRef,
      register,
      deregister,
      setState,
    },
  }
}
