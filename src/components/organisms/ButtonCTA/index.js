import React, { cloneElement } from "react"
import styled from "styled-components"
import { variant } from "styled-system"

import { Container, Flex } from "@rent_avail/layout"
import SkewBox from "components/molecules/SkewBox"

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
  return (
    <SkewBox bg={bg} {...props}>
      <Container maxWidth={containerWidth} py="6rem">
        <StyledFlex orientation={orientation}>
          {title &&
            cloneElement(title, {
              sx: {
                ...title.props?.sx,
                flex: "1",
                minWidth: "80%",
              },
            })}
          {button}
        </StyledFlex>
      </Container>
    </SkewBox>
  )
}

export { ButtonCTA }
