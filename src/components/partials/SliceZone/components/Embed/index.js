import React from "react"
import RichText from "components/partials/SliceZone/components/RichText"

export default function Embed({ embed, ...props }) {
  return <RichText {...props} render={[{ type: "embed", oembed: embed }]} />
}
