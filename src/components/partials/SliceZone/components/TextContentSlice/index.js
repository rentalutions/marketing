import React from "react"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS, STYLING } from "config"
import { Container } from "@rent_avail/layout"

const TextContentSlice = ({ slice }) => {
  const {
    primary: { title, content },
  } = slice

  return (
    <Container maxWidth={CONTAINER_WIDTHS} my="2rem">
      {title && (
        <RichText
          color="blue_500"
          render={title}
          mb="2rem"
          sx={{ ...STYLING.title }}
        />
      )}
      {content && <RichText color="blue_500" render={content} />}
    </Container>
  )
}

export default TextContentSlice
