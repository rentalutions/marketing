import React from "react"
import { STYLING } from "config"
import Image from "next/image"
import Embed from "../Embed"
import RichText from "../RichText"

function howItWorksSliceSection({
  idx,
  title,
  description,
  image,
  video,
  embed,
  ...props
}) {
  return {
    uid: title?.[0]?.text || idx,
    copy: (
      <React.Fragment>
        <RichText render={title} mb="2rem" sx={{ ...STYLING.title }} />
        <RichText render={description} />
      </React.Fragment>
    ),
    image: image?.url && (
      <Image
        src={image.url}
        width={image.dimensions.width}
        height={image.dimensions.height}
        alt={image.alt}
        title={image.title}
      />
    ),
    video,
    embed: embed?.html && <Embed embed={embed} />,
    ...props,
  }
}

export default howItWorksSliceSection
