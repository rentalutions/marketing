import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { variant } from "styled-system"
import { useIntersection } from "@rent_avail/utils"

const MotionContents = styled.div(
  {
    transitionDelay: ({delay}) => `${delay || 0}s`,
    transitionDuration: ({duration}) => `${duration || 0}s`,
  },
  variant({
    prop: "visibility",
    variants: {
      hidden: {
        opacity: 0.0,
        transform: "translateY(1rem)",
      },
      shown: {
        opacity: 1.0,
        transform: "translateY(0rem)",
      },
    },
  })
)

export function withFadeIn(BaseComponent) {
  return ({
    intersectionOptions,
    transition,
    ...props
  }) => (
    <FadeIn intersectionOptions={intersectionOptions} transition={transition}>
        <BaseComponent {...props} />
    </FadeIn>
  )
}

export function FadeIn({
  intersectionOptions = { threshold: 0.75 },
  transition: {
    delay = 0.5,
    duration = 1.0
  } = {},
  ...props
}) {
  const [hidden, setHidden] = useState(true)
  const [ target, { isIntersecting } ] = useIntersection(intersectionOptions)

  useEffect(() => {
    hidden && setHidden(!isIntersecting)
  }, [isIntersecting])

  return (
    <MotionContents
      {...props}
      ref={ref => target.current = ref}
      visibility={hidden ? "hidden" : "shown"}
      delay={delay}
      duration={duration}
    />
  )
}
