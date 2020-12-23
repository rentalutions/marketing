import React from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import { Box } from "@rent_avail/layout"
import htmlSerializer from "./html-serializer"

export default function RichText({ render, heading, ...props }) {
  return heading ? (
    <PrismicRichText render={render} htmlSerializer={htmlSerializer(props)} />
  ) : (
    <Box className="rich-text">
      <PrismicRichText render={render} htmlSerializer={htmlSerializer(props)} />
    </Box>
  )
}
