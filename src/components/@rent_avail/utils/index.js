import { useRef, useEffect, useState } from "react"

export function useHadIntersected({ threshold = 0.75 } = {}) {
  const intersectionTarget = useRef()
  const [observer, setObserver] = useState()
  const [hadIntersected, setHadIntersected] = useState(false)

  useEffect(() => {
    observer?.disconnect()
    if (!hadIntersected) {
      const newObserver = new IntersectionObserver(
        ([entry]) => {
          const { isIntersecting } = entry
          if (!hadIntersected && isIntersecting) {
            setHadIntersected(true)
            observer?.disconnect()
          }
        },
        { threshold }
      )

      setObserver(newObserver)
      return () => newObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!hadIntersected) {
      if (intersectionTarget.current && observer) {
        observer.observe(intersectionTarget.current)
      }
    } else {
      observer?.disconnect()
    }
  }, [intersectionTarget, observer])

  return [hadIntersected, intersectionTarget]
}

export function useAnimation({ delay = 0.5, duration = 1.0 } = {}) {
  const [final, setFinal] = useState(false)
  function animate() {
    setFinal(true)
  }

  const baseAnimationProps = {
    initial: "initial",
    animate: final ? "final" : "initial",
    transition: {
      delay,
      duration,
    },
  }

  const animationEffects = {
    fadeIn: {
      ...baseAnimationProps,
      variants: {
        initial: { opacity: 0, y: "1rem" },
        final: { opacity: 1, y: "0rem" },
      },
    },
    fadeOut: {
      ...baseAnimationProps,
      variants: {
        initial: { opacity: 1, y: "0rem" },
        final: { opacity: 0, y: "-1rem" },
      },
    },
    scaleIn: {
      ...baseAnimationProps,
      variants: {
        initial: { opacity: 0, scale: 0 },
        final: { opacity: 1, scale: 1 },
      },
    },
  }

  return [animationEffects, animate]
}

export function useInViewAnimation({ threshold, delay, duration } = {}) {
  const [hadIntersected, intersectionView] = useHadIntersected({ threshold })
  const [animationVariants, animate] = useAnimation({
    delay,
    duration,
  })

  useEffect(() => {
    if (hadIntersected) {
      animate()
    }
  }, [hadIntersected])

  return [animationVariants, intersectionView]
}
