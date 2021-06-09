import { useCallback, useEffect, useMemo, useState } from "react"

function useCarousel(
  items,
  { visibleItemsLenght = 5, interval = 3, disableIntervalOnSelect = true } = {}
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

  const visibleItem = useCallback(
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

  const { item: activeItem } = useMemo(visibleItem, [visibleItem])
  const visibleItems = useMemo(
    () =>
      Array(visibleItemsLenght)
        .fill(activeIndex - Math.floor(visibleItemsLenght / 2))
        .map((v, i) => visibleItem(v + i)),
    [visibleItemsLenght, activeIndex, visibleItem]
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
