import React from "react"
import ResponsiveEmbed from "components/elements/ResponsiveEmbed"
import { isValidEmbed } from "utils/embed"

export default function Embed({ embed, ...props }) {
  return isValidEmbed(embed) ? (
    <ResponsiveEmbed
      aspect={{ width: embed.width, height: embed.height }}
      {...props}
    >
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: embed.html }} />
    </ResponsiveEmbed>
  ) : (
    "Embed provider not supported"
  )
}
