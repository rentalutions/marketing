import React from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { Box } from "@rent_avail/layout"
import { createGlobalStyle } from "styled-components"
import htmlSerializer from "./html-serializer"

export const RichTextGlobalStyle = createGlobalStyle`
  .rich-text p {
    margin: .5rem 0;
  }
  .rich-text p:empty:before {
    content: ' ';
    white-space: pre;
  }
`

const RichText = ({ render, heading, ...props }) => {
  return heading ? (
    <PrismicRichText render={render} htmlSerializer={htmlSerializer(props)} />
  ) : (
    <Box className="rich-text">
      <PrismicRichText render={render} htmlSerializer={htmlSerializer(props)} />
    </Box>
  )
}

export default RichText
