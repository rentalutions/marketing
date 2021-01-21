import React, { cloneElement } from "react"
import styled from "styled-components"
import { variant } from "styled-system"
import { motion } from "framer-motion"
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
  ...props
}) {
  console.log(button)
  return (
    <SkewBox bg={bg} {...props}>
      <Container maxWidth={containerWidth} py="6rem">
        <StyledFlex orientation={orientation}>
          {title && (
            <FadeIn
              {...title.props}
              as={motion[title.props.as]}
              transition={{ delay: 0.5 }}
              sx={{
                ...title.props?.sx,
                ...STYLING.headline,
                flex: "1",
                minWidth: "fit-content",
              }}
            />
          )}
          {button && (
            <FadeIn transition={{ delay: 0.7 }}>
              <Box
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
            </FadeIn>
          )}
        </StyledFlex>
      </Container>
    </SkewBox>
  )
}

export { ButtonCTA }
