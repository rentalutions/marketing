import { useRef, useEffect, useState } from "react"

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

export function useAnimation({ duration, staggerDirection = 1 } = {}) {
  const [final, setFinal] = useState(false)

  function animate() {
    setFinal(true)
  }

  const baseProps = {
    transition: {
      duration,
    },
  }

  const container = {
    initial: "initial",
    animate: final ? "final" : "initial",
    variants: {
      initial: { opacity: 0 },
      final: {
        opacity: 1,
        transition: {
          duration: 0,
          staggerChildren: 0.15,
          staggerDirection,
        },
      },
    },
  }

  const animationEffects = {
    fadeIn: {
      container,
      item: {
        ...baseProps,
        variants: {
          initial: { opacity: 0, y: "1rem" },
          final: { opacity: 1, y: "0rem" },
        },
      },
    },
    fadeOut: {
      container,
      item: {
        ...baseProps,
        variants: {
          initial: { opacity: 1, y: "0rem" },
          final: { opacity: 0, y: "-1rem" },
        },
      },
    },
    scaleIn: {
      container,
      item: {
        baseProps,
        variants: {
          initial: { opacity: 0, scale: 0 },
          final: { opacity: 1, scale: 1 },
        },
      },
    },
  }

  return [animationEffects, animate]
}

export function useInViewAnimation({
  threshold = 0.1,
  duration,
  staggerDirection,
} = {}) {
  const [hadIntersected, intersectionView] = useHadIntersected({ threshold })
  const [animationVariants, animate] = useAnimation({
    duration,
    staggerDirection,
  })

  useEffect(() => {
    if (hadIntersected) {
      animate()
    }
  }, [hadIntersected])

  return [animationVariants, intersectionView]
}
