import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { variant } from "styled-system"

import { useInViewAnimation } from "utils/animation"
import { Box, Container, Flex } from "@rent_avail/layout"

import SkewBox from "components/molecules/SkewBox"

import { STYLING } from "config"

const StyledFlex = styled(Flex)(
  {
    alignItems: "center",
    gap: "2rem",
  },
  variant({
    prop: "orientation",
    variants: {
      top: {
        flexFlow: "column",
        textAlign: "center",
      },
      right: {
        flexFlow: ["column", "row-reverse"],
        textAlign: "right",
      },
      bottom: {
        flexFlow: "column-reverse",
        textAlign: "center",
      },
      left: {
        flexFlow: ["column", "row"],
        textAlign: "left",
      },
    },
  })
)

function CallToAction({
  bg,
  title,
  description,
  image = null,
  children,
  childrenGrow = false,
  orientation = "left",
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const staggerDirection = ["left", "top"].includes(orientation) ? 1 : -1
  const isVertical = ["top", "bottom"].includes(orientation)
  const [presets, intersectionView] = useInViewAnimation({ staggerDirection })
  const animation = presets[animationPreset]

  return (
    <SkewBox as={motion.aside} {...animation?.container} bg={bg} {...props}>
      <Container
        ref={intersectionView}
        maxWidth={isVertical ? "62rem" : containerWidth}
        py="6rem"
      >
        <StyledFlex orientation={orientation}>
          {(title || description) && (
            <Box
              as={motion.aside}
              {...animation?.item}
              sx={{
                flex: "1",
                margin: "auto",
              }}
            >
              {cloneElement(title, {
                sx: {
                  ...STYLING.headline,
                  ...title.props?.sx,
                },
              })}
              {description &&
                cloneElement(description, {
                  sx: {
                    ...STYLING.body,
                    py: "2rem",
                    ...description.props?.sx,
                  },
                })}
            </Box>
          )}
          {children && (
            <Box
              as={motion.aside}
              {...animation?.item}
              sx={{
                flex: childrenGrow ? "1" : "0",
                margin: "auto",
                minWidth: "unset",
              }}
            >
              {children}
            </Box>
          )}
          {image && (
            <Box
              as={motion.aside}
              {...animation?.item}
              sx={{
                flex: "1 0",
                margin: "auto",
              }}
            >
              {image}
            </Box>
          )}
        </StyledFlex>
      </Container>
    </SkewBox>
  )
}

export { CallToAction }
