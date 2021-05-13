import React from "react"
import { Blockquote } from "components/organisms/Blockquote"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS } from "config"

const BlockquoteSlice = ({ slice }) => {
  const {
    primary: { content, background, quoteColor, textColor, textAlign = "left" },
  } = slice

  return (
    <Blockquote
      containerWidth={CONTAINER_WIDTHS}
      content={content && <RichText render={content} />}
      bg={background === "none" ? undefined : background}
      quoteColor={quoteColor}
      textColor={textColor}
      textAlign={textAlign}
    />
  )
}

export default BlockquoteSlice
