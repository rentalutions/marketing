import React, { useCallback, useEffect, useState } from "react"

function useCarousel(items, {
  interval = 3,
  disableIntervalOnSelect = true,
} = {}) {
  const [ currentInterval, setCurrentInterval ] = useState(interval)
  const [ activeIndex, setActiveIndex ] = useState(0)

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

  function visibleItem(fromActiveIndex) {
    const index = getSafeIndex(activeIndex + fromActiveIndex)
    return {
      item: items.length > index ? items[index] : {},
      level: Math.abs(fromActiveIndex),
      selectItem: () => {
        setActiveIndex(index)
        if (disableIntervalOnSelect) {
          setCurrentInterval(0)
        }
      },
    }
  }

  const activeItem = items.length > activeIndex ? items[activeIndex] : {}
  const visibleItems = [
    visibleItem(-2),
    visibleItem(-1),
    visibleItem(0),
    visibleItem(1),
    visibleItem(2),
  ]

  return [ activeItem, visibleItems ]
}

export { useCarousel }
