import { useCallback, useEffect, useMemo, useState } from "react"

function useCarousel(
  items,
  { visibleItemsLength = 5, interval = 3, disableIntervalOnSelect = true } = {}
) {
  const [currentInterval, setCurrentInterval] = useState(interval)
  const [activeIndex, setActiveIndex] = useState(0)

  const getSafeIndex = useCallback(
    (desiredIndex) => {
      const { length } = items
      if (!length) return undefined
      const remainder = desiredIndex % length
      const safeIndex = remainder < 0 ? remainder + length : remainder
      return safeIndex
    },
    [items]
  )

  useEffect(() => {
    if (currentInterval) {
      const timeout = setTimeout(() => {
        const nextIndex = getSafeIndex(activeIndex + 1)
        if (nextIndex !== undefined) {
          setActiveIndex(nextIndex)
        }
      }, currentInterval * 1000)
      return () => {
        clearInterval(timeout)
      }
    }
  }, [currentInterval, items, activeIndex])

  const getVisibleItem = useCallback(
    (index = activeIndex) => {
      const safeIndex = getSafeIndex(index)
      return {
        item: items.length > safeIndex ? items[safeIndex] : {},
        level: Math.abs(index - activeIndex),
        selectItem: () => {
          setActiveIndex(safeIndex)
          if (disableIntervalOnSelect) {
            setCurrentInterval(0)
          }
        },
      }
    },
    [getSafeIndex, activeIndex, setActiveIndex, setCurrentInterval]
  )

  const reduceVisibleItems = useCallback(
    (_activeIndex, _getVisibleItem) =>
      Array(visibleItemsLength)
        .fill(_activeIndex - Math.floor(visibleItemsLength / 2)) // -2 -2 -2 -2 -2
        .reduce(
          (returnObj, lowerVisibleIdx, fromLowerIdx) => {
            const fromActiveIndex = lowerVisibleIdx + fromLowerIdx // -2 -1 0 1 2
            const currentItem = _getVisibleItem(fromActiveIndex)
            returnObj.visibleItems.push(currentItem)
            return currentItem.level !== 0
              ? returnObj
              : {
                  activeItem: currentItem.item,
                  visibleItems: returnObj.visibleItems,
                }
          },
          { activeItem: undefined, visibleItems: [] }
        ),
    [visibleItemsLength]
  )

  const { activeItem, visibleItems } = useMemo(
    () => reduceVisibleItems(activeIndex, getVisibleItem),
    [activeIndex, getVisibleItem, reduceVisibleItems]
  )

  const navigateToItem = useCallback(
    (indexFromActive) => {
      setActiveIndex(getSafeIndex(activeIndex + indexFromActive))
      if (disableIntervalOnSelect) {
        setCurrentInterval(0)
      }
    },
    [setActiveIndex, getSafeIndex, activeIndex]
  )

  return [activeItem, visibleItems, activeIndex, navigateToItem]
}

export { useCarousel }
