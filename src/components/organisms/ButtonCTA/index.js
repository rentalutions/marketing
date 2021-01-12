import React, { useMemo } from "react"
import { Container, Flex } from "@rent_avail/layout"
import SkewBox from "components/molecules/SkewBox"
import Button from "components/elements/Button"
import Link from "components/partials/SliceZone/components/Link"
import RichText from "components/partials/SliceZone/components/RichText"

function ButtonCTA({
  bg,
  title,
  buttonText,
  buttonLink,
  position,
  containerWidth,
  ...props
}) {
  const { flow, textAlign } = useMemo(() => {
    switch (position) {
      case "top":
        return {
          flow: "column wrap",
          textAlign: "center",
        }
      case "right":
        return {
          flow: "row-reverse wrap",
          textAlign: "right",
        }
      case "bottom":
        return {
          flow: "column-reverse wrap",
          textAlign: "center",
        }
      case "left":
      default:
        return {
          flow: "row wrap",
          textAlign: "left",
        }
    }
  }, [position])

  return (
    <SkewBox bg={bg} {...props}>
      <Container maxWidth={containerWidth} py="6rem">
        <Flex sx={{ flexFlow: flow, gap: "2rem" }}>
          <RichText
            flex="1"
            textAlign={textAlign}
            render={title}
            minWidth="80%"
          />
          <Link link={buttonLink}>
            <Button
              flex="0"
              variant="primary"
              background={bg}
              type="submit"
              display="block"
              height="fit-content"
              width="fit-content"
              margin="auto"
              textAlign="center"
            >
              {buttonText}
            </Button>
          </Link>
        </Flex>
      </Container>
    </SkewBox>
  )
}

export { ButtonCTA }
