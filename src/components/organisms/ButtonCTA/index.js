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
        flexFlow: "column wrap",
        textAlign: "center",
      },
      right: {
        flexFlow: "row-reverse wrap",
        textAlign: "right",
      },
      bottom: {
        flexFlow: "column-reverse wrap",
        textAlign: "center",
      },
      left: {
        flexFlow: "row wrap",
        textAlign: "left",
      },
    },
  })
)

function ButtonCTA({
  bg,
  title,
  description,
  image = null,
  button,
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
                height: "fit-content",
                width: "fit-content",
                minWidth: "fit-content",
              }}
            >
              {cloneElement(title, {
                sx: {
                  ...title.props?.sx,
                  ...STYLING.headline,
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
          {button && (
            <Box
              as={motion.aside}
              {...animation?.item}
              sx={{
                flex: "0",
                margin: "auto",
                height: "fit-content",
                width: "fit-content",
                minWidth: "unset",
              }}
            >
              {button}
            </Box>
          )}
          {image && (
            <Box
              as={motion.aside}
              {...animation?.item}
              sx={{
                flex: "1 0",
                margin: "auto",
                height: "fit-content",
                width: "fit-content",
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

export { ButtonCTA }
