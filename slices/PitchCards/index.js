import React from "react"
import { Flex, Box } from "@rent_avail/layout"
import { PitchCards } from "components/core/PitchCards"
import Anchor from "components/prismic/Anchor"
import RichText from "components/prismic/RichText"
import { availContainerWidth } from "lib/config"

const PitchCardsSlice = ({ slice }) => {
  const {
    primary: { title, titleImage, centerTitle, description, hash },
  } = slice

  const sections = slice.items.map(
    (
      {
        title, // eslint-disable-line no-shadow
        centerTitle, // eslint-disable-line no-shadow
        description, // eslint-disable-line no-shadow
        icon,
        linkText,
        linkUrl,
        linkAsButton,
      },
      idx
    ) => {
      return {
        title: (
          <RichText
            textAlign={centerTitle ? "center" : "inherit"}
            color={centerTitle ? "blue_500" : "inherit"}
            render={title}
            heading
          />
        ),
        description: <RichText render={description} />,
        icon,
        key: (title[0] && title[0].text) || idx,
        link:
          linkText && linkUrl
            ? {
                text: linkText,
                url: linkUrl && linkUrl.url,
                target:
                  linkUrl &&
                  (linkUrl.target ||
                    (linkUrl.link_type === "Media" && "_blank")),
                button: linkAsButton,
              }
            : null,
      }
    }
  )
  const titleText = (
    <RichText
      color="blue_500"
      textAlign={centerTitle ? "center" : "inherit"}
      render={title}
      heading
    />
  )
  const titleWithImage = titleImage && (
    <Flex
      justifyContent={centerTitle ? "center" : "flex-start"}
      alignItems="flex-end"
    >
      <RichText color="blue_500" render={title} heading />
      <Box
        as="img"
        src={titleImage.url}
        alt={titleImage.alt}
        ml="1rem"
        sx={{ transform: "translateY(-10%)" }}
      />
    </Flex>
  )
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <PitchCards
        title={titleWithImage || titleText}
        description={<RichText render={description} />}
        sections={sections}
        maxWidth={availContainerWidth}
        m="6rem 0 12rem"
        span={[12, 12, 6, 4]}
      />
    </React.Fragment>
  )
}

export default PitchCardsSlice
