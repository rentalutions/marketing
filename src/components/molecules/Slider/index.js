import React, { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "react-feather"

import { Box } from "@rent_avail/layout"

import { useInViewAnimation } from "utils/animation"

import ControlChevron from "./control-chevron"
import useSlider from "./use-slider"

function Slider({
  animationPreset = "fadeIn",
  containerRef = useRef(),
  itemProps,
  children,
  ...props
}) {
  const [presets, animationIntersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  const scrollRef = useRef()
  const childrenRef = useRef([])

  const { scrollSpace, scrollControl } = useSlider({
    containerRef,
    scrollRef,
    childrenRef,
  })

  return (
    <Box
      as={motion.aside}
      {...animation?.item}
      ref={animationIntersectionView}
      {...props}
    >
      <Box
        ref={scrollRef}
        sx={{
          padding: `0 ${scrollSpace}px 1rem ${scrollSpace}px`,
          margin: `0 -${scrollSpace}px`,
          overflow: "scroll",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            flexDirection: ["row"],
            "& > *:not(:last-child)": {
              marginRight: "2rem",
            },
          }}
          forwardedAs={motion.div}
          {...animation?.container}
        >
          {React.Children.map(children, (child, idx) => (
            <Box display="inline-block">
              <Box
                flex="1 0 auto"
                as={motion.div}
                {...animation?.item}
                {...child.props}
                ref={(el) => {
                  childrenRef.current[idx] = el
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      {scrollControl.shouldShow && (
        <Box
          sx={{
            textAlign: "right",
            "> *": {
              margin: "1rem",
            },
          }}
        >
          <ControlChevron as={ChevronLeft} {...scrollControl.leftControl} />
          <ControlChevron as={ChevronRight} {...scrollControl.rightControl} />
        </Box>
      )}
    </Box>
  )
}

export { Slider }
