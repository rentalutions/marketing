import React, { useMemo } from "react"
import Image from "next/image"
import Anchor from "components/elements/Anchor"
import { HowItWorksSections } from "components/organisms/HowItWorks"
import { STYLING, CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"
import Embed from "../Embed"

export function transformSliceToSection({
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

const HowItWorksSectionsSlice = ({ slice }) => {
  const {
    primary: { title, background, flip, hash },
    items,
  } = slice
  const sections = useMemo(
    () => items.map((props, idx) => transformSliceToSection({ idx, ...props })),
    [items]
  )
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <HowItWorksSections
        title={<RichText render={title} />}
        sections={sections}
        bg={background}
        containerWidth={CONTAINER_WIDTHS}
        py="5rem"
        alternate={flip ? (idx) => idx % 2 === 0 : undefined}
        color={background === "blue_500" ? "blue_100" : "inherit"}
      />
    </React.Fragment>
  )
}

export default HowItWorksSectionsSlice
