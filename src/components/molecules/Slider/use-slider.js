import { useCallback, useEffect, useState, useRef, useMemo } from "react"
import { useResize } from "@rent_avail/utils"

function useSlider({ containerRef, scrollRef, childrenRef }) {
  const containerObserver = useRef()

  const containerRect = useResize(containerRef)

  const [scrollSpace, setScrollSpace] = useState(0)

  const [leftEnabled, setLeftEnabled] = useState(false)
  const [rightEnabled, setRightEnabled] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const { marginLeft, paddingLeft } = getComputedStyle(container)
    setScrollSpace(parseInt(marginLeft, 10) + parseInt(paddingLeft, 10))
  }, [containerRect])

  const scroll = useCallback(
    (to) => {
      const clipped = childrenRef.current.find(
        ({ offsetLeft, offsetWidth }) =>
          offsetLeft + offsetWidth - scrollRef.current.scrollLeft >
          (to === "left" ? -1 : 1) * containerRect.width
      )
      if (clipped) {
        scrollRef.current.scrollTo(clipped.offsetLeft, 0)
      }
    },
    [containerRect, scrollRef, childrenRef]
  )

  useEffect(() => {
    containerObserver.current?.disconnect()

    function observerCb(entries) {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting
        const { previousSibling, nextSibling } = entry.target.parentElement
        if (previousSibling === null) setLeftEnabled(!isVisible)
        if (nextSibling === null) setRightEnabled(!isVisible)
      })
    }
    const observerOptions = {
      root: containerRef.current,
      threshold: 1.0,
    }
    containerObserver.current = new IntersectionObserver(
      observerCb,
      observerOptions
    )

    const first = childrenRef.current[0]
    if (first) containerObserver.current.observe(first)

    const last = childrenRef.current[childrenRef.current.length - 1]
    if (last) containerObserver.current.observe(last)

    return () => {
      containerObserver.current?.disconnect()
    }
  }, [containerRef, childrenRef])

  const scrollControl = useMemo(
    () => ({
      shouldShow: leftEnabled || rightEnabled,
      leftControl: {
        enabled: leftEnabled,
        onClick: () => leftEnabled && scroll("left"),
      },
      rightControl: {
        enabled: rightEnabled,
        onClick: () => rightEnabled && scroll("right"),
      },
    }),
    [leftEnabled, rightEnabled, scroll]
  )

  return { scrollSpace, scrollControl }
}

export default useSlider
