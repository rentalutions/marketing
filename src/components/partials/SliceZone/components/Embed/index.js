import React from "react"
import { isValidEmbed } from "utils/embed"
import ResponsiveEmbed from "components/elements/ResponsiveEmbed"
import RichText from "components/partials/SliceZone/components/RichText"

export default function Embed({ embed, ...props }) {
  return isValidEmbed(embed) ? (
    <ResponsiveEmbed
      aspect={{ width: embed.width, height: embed.height }}
      {...props}
    >
      <RichText render={[{ type: "embed", oembed: embed }]} />
    </ResponsiveEmbed>
  ) : (
    "Embed provider not supported"
  )
}
