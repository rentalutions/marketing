import React, { cloneElement } from "react"
import {motion} from "framer-motion"
import styled from "styled-components"
import { variant } from "styled-system"

import { useAnimateIntersection } from "@rent_avail/utils"
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
  button,
  orientation = "left",
  containerWidth,
  ...props
}) {
  const [ { fadeIn }, target ] = useAnimateIntersection()

  return (
    <SkewBox bg={bg} {...props}>
      <Container ref={target} maxWidth={containerWidth} py="6rem">
        <StyledFlex orientation={orientation}>
          {title &&
            <Box
              sx={{
                flex: "1",
                margin: "auto",
                height: "fit-content",
                width: "fit-content",
                minWidth: "fit-content",
              }}
            >
              <motion.aside {...fadeIn}>
                {cloneElement(title, {
                  sx: {
                    ...title.props?.sx,
                    ...STYLING.headline,
                  },
                })}
              </motion.aside>
            </Box>
          }
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
              <motion.aside {...fadeIn} transition={{
                ...fadeIn.transition,
                delay: 0.75,
              }}>
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
