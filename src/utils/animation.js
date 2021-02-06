import { useRef, useEffect, useState, useCallback } from "react"

export function useHadIntersected({ threshold } = {}) {
  const targetRef = useRef()
  const observerRef = useRef()
  const [hadIntersected, setHadIntersected] = useState(false)

  useEffect(() => {
    observerRef.current?.disconnect()
    if (!hadIntersected && targetRef.current) {
      observerRef.current = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (!hadIntersected && isIntersecting) {
            setHadIntersected(true)
            observerRef.current?.disconnect()
          }
        },
        { threshold }
      )
      observerRef.current.observe(targetRef.current)
      return () => observerRef.current?.disconnect()
    }
  }, [targetRef.current])

  return [hadIntersected, targetRef]
}

export function useAnimation({
  containerDuration = 0,
  itemDuration,
  staggerChildren = 0.15,
  staggerDirection = 1,
  when,
} = {}) {
  const [final, setFinal] = useState(false)

  const makePreset = useCallback(
    (variants) => ({
      container: {
        initial: "initial",
        animate: final ? "final" : "initial",
        variants: {
          ...variants,
          final: {
            ...variants.final,
            transition: {
              ...(containerDuration !== "default" && {
                duration: containerDuration,
              }),
              staggerChildren,
              staggerDirection,
              when,
            },
          },
        },
      },
      item: {
        transition: {
          duration: itemDuration,
        },
        variants,
      },
    }),
    [final, containerDuration, itemDuration, staggerChildren, staggerDirection]
  )

  const presets = {
    none: {
      container: null,
      item: null,
    },
    fadeIn: makePreset({
      initial: { opacity: 0, y: "1rem" },
      final: { opacity: 1, y: "0rem" },
    }),
    fadeOut: makePreset({
      initial: { opacity: 1, y: "0rem" },
      final: { opacity: 0, y: "-1rem" },
    }),
    scaleIn: makePreset({
      initial: { opacity: 0, scale: 0 },
      final: { opacity: 1, scale: 1 },
    }),
  }

  return [presets, setFinal]
}

export function useInViewAnimation({
  threshold = 0.1,
  containerDuration,
  itemDuration,
  staggerChildren,
  staggerDirection,
  when,
} = {}) {
  const [hadIntersected, intersectionView] = useHadIntersected({ threshold })
  const [animationVariants, setAnimation] = useAnimation({
    containerDuration,
    itemDuration,
    staggerChildren,
    staggerDirection,
    when,
  })

  useEffect(() => {
    if (hadIntersected) {
      setAnimation(true)
    }
  }, [hadIntersected])

  return [animationVariants, intersectionView]
}
