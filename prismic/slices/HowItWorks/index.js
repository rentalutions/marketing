import React from "react"
import RichText from "prismic/components/RichText"
import Anchor from "prismic/components/Anchor"
import { HowItWorks } from "components/core/HowItWorks"
import { availContainerWidth } from "lib/config"

const MySlice = ({ slice }) => {
  const {
    primary: { title, background, flip, hash },
  } = slice
  // eslint-disable-next-line no-shadow
  const sections = slice.items.map(({ title, description, image }, idx) => ({
    uid: (title && title[0]) || idx,
    copy: (
      <React.Fragment>
        <RichText render={title} mb="2rem" heading />
        <RichText render={description} />
      </React.Fragment>
    ),
    image,
  }))
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <HowItWorks
        title={<RichText render={title} heading />}
        sections={sections}
        bg={background}
        containerWidth={availContainerWidth}
        py="5rem"
        alternate={flip ? (idx) => idx % 2 === 0 : undefined}
        color={background === "blue_500" ? "blue_100" : "inherit"}
      />
    </React.Fragment>
  )
}

export default MySlice
