import React from "react"
import Showcase from "components/organisms/Showcase"
import { CONTAINER_WIDTHS, STYLING } from "config"
import Anchor from "components/elements/Anchor"
import Image from "next/image"
import RichText from "../RichText"

const ShowcaseSlice = ({ slice }) => {
  const {
    primary: { title, description, image, flip, hash },
  } = slice
  const cases = slice.items.map(({ icon, copy }) => ({
    icon,
    copy: <RichText render={copy} />,
  }))
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <Showcase
        copy={
          <React.Fragment>
            <RichText
              color="blue_500"
              render={title}
              mb="2rem"
              sx={{ ...STYLING.title }}
            />
            <RichText render={description} />
          </React.Fragment>
        }
        image={
          image?.url && (
            <Image
              src={image.url}
              width={image.dimensions.width}
              height={image.dimensions.height}
              alt={image.alt}
              title={image.title}
            />
          )
        }
        cases={cases}
        caseInterval={4000}
        containerWidth={CONTAINER_WIDTHS}
        flip={flip}
        mb="10rem"
      />
    </React.Fragment>
  )
}

export default ShowcaseSlice
