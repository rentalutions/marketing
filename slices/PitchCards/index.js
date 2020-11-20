import React from "react"
import { PitchCards } from "components/core/PitchCards"
import Anchor from "components/prismic/Anchor"
import RichText from "components/prismic/RichText"
import { availContainerWidth } from "lib/config"

const PitchCardsSlice = ({ slice }) => {
  const {
    primary: { title, description, hash },
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
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <PitchCards
        title={<RichText render={title} heading />}
        description={<RichText render={description} />}
        sections={sections}
        maxWidth={availContainerWidth}
        my="6rem"
        span={[12, 12, 6, 4]}
      />
    </React.Fragment>
  )
}

export default PitchCardsSlice
