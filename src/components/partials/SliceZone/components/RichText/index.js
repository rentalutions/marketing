import React from "react"
import { RichText as PrismicRichText } from "prismic-reactjs"
import htmlSerializer from "./html-serializer"

export default function RichText({ render, ...props }) {
  return (
    <PrismicRichText render={render} htmlSerializer={htmlSerializer(props)} />
  )
}
