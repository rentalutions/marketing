import React from "react"
import { RichText } from "prismic-reactjs"
import { PitchCards } from "components/core/PitchCards"
import Heading from "components/prismic/Heading"

const PitchCardsSlice = ({ slice }) => {
  const {
    primary: {
      title: [title],
      description,
    },
  } = slice

  const sections = slice.items.map(
    // eslint-disable-next-line no-shadow
    ({ title, description, icon, linkText, linkUrl }) => ({
      title,
      description: <RichText render={description} />,
      icon: icon.url,
      link:
        linkText && linkUrl
          ? {
              text: linkText,
              url: linkUrl && linkUrl.url,
            }
          : null,
    })
  )
  return (
    <PitchCards
      title={<Heading render={title} />}
      description={<RichText render={description} />}
      sections={sections}
      maxWidth="96rem"
      my="6rem"
      span={[12, 6, 4]}
    />
  )
}

export default PitchCardsSlice
