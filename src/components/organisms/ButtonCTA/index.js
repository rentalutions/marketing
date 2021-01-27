import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { variant } from "styled-system"

import { useInViewAnimation } from "components/@rent_avail/utils"
import { Box, Container, Flex } from "@rent_avail/layout"

import SkewBox from "components/molecules/SkewBox"

import { STYLING } from "config"
import { FadeIn } from "components/fadeIn"

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

// const variantsDict = {
//   top: {
//     // style
//   },
//   left: {
//     // style
//   },
//   bottom: {
//     // style
//   },
//   right: {
//     // style
//   }
// }

function ButtonCTA({
  bg,
  title,
  button,
  orientation = "left",
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <SkewBox bg={bg} {...props}>
      <Container ref={intersectionView} maxWidth={containerWidth} py="6rem">
        <StyledFlex orientation={orientation}>
          {title && (
            <Box
              sx={{
                flex: "1",
                margin: "auto",
                height: "fit-content",
                width: "fit-content",
                minWidth: "fit-content",
              }}
            >
              <motion.aside {...animation}>
                {cloneElement(title, {
                  sx: {
                    ...title.props?.sx,
                    ...STYLING.headline,
                  },
                })}
              </motion.aside>
            </Box>
          )}
          {button && (
            <Box
              sx={{
                flex: "0",
                margin: "auto",
                height: "fit-content",
                width: "fit-content",
                minWidth: "unset",
              }}
            >
              <motion.aside
                {...animation}
                transition={{
                  ...animation.transition,
                  delay: 0.75,
                }}
              >
                {button}
              </motion.aside>
            </Box>
          )}
        </StyledFlex>
      </Container>
    </SkewBox>
  )
}

export { ButtonCTA }
