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
          setHadIntersected((value) => !value && isIntersecting)
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

  function animate() {
    setFinal(true)
  }

  const makeEffect = useCallback(
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

  const animationEffects = {
    fadeIn: makeEffect({
      initial: { opacity: 0, y: "1rem" },
      final: { opacity: 1, y: "0rem" },
    }),
    fadeOut: makeEffect({
      initial: { opacity: 1, y: "0rem" },
      final: { opacity: 0, y: "-1rem" },
    }),
    scaleIn: makeEffect({
      initial: { opacity: 0, scale: 0 },
      final: { opacity: 1, scale: 1 },
    }),
  }

  return [animationEffects, animate]
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
  const [animationVariants, animate] = useAnimation({
    containerDuration,
    itemDuration,
    staggerChildren,
    staggerDirection,
    when,
  })

  useEffect(() => {
    if (hadIntersected) {
      animate()
    }
  }, [hadIntersected])

  return [animationVariants, intersectionView]
}
