import React from "react"
import { Blockquote } from "components/organisms/Blockquote"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS } from "config"

const BlockquoteSlice = ({ slice }) => {
  const {
    primary: { content, background, quoteColor, textColor, alignment = "left" },
  } = slice

  return (
    <Blockquote
      containerWidth={CONTAINER_WIDTHS}
      content={content && <RichText render={content} />}
      bg={background === "transparent" ? undefined : background}
      quoteColor={quoteColor}
      textColor={textColor}
      alignment={alignment}
      py={["3rem", "4.5rem"]}
    />
  )
}

export default BlockquoteSlice
