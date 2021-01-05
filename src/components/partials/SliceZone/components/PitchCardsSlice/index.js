import React from "react"
import { Box } from "@rent_avail/layout"
import { PitchCards } from "components/organisms/PitchCards"
import Anchor from "components/elements/Anchor"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import RichText from "../RichText"

const PitchCardsSlice = ({ slice }) => {
  const {
    primary: { title, titleImage, centerTitle, description, hash },
  } = slice

  const urlResolver = useUrlResolver()

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
    ) => ({
      title: (
        <RichText
          textAlign={centerTitle ? "center" : "inherit"}
          color={centerTitle ? "blue_500" : "inherit"}
          render={title}
        />
      ),
      description: <RichText render={description} />,
      icon,
      key: title?.[0]?.text || idx,
      link:
        linkText && linkUrl
          ? {
              text: linkText,
              url: urlResolver(linkUrl.url),
              target:
                linkUrl.target || (linkUrl.link_type === "Media" && "_blank"),
              button: linkAsButton,
            }
          : null,
    })
  )
  const titleText = (
    <RichText
      color="blue_500"
      textAlign={centerTitle ? "center" : "inherit"}
      render={title}
    />
  )
  const titleWithImage = titleImage?.url && (
    <Box textAlign={centerTitle ? "center" : "inherit"}>
      <RichText
        display="inline-block"
        verticalAlign="bottom"
        color="blue_500"
        render={title}
      />
      <Box
        as="img"
        display="inline-block"
        verticalAlign="bottom"
        src={titleImage.url}
        alt={titleImage.alt}
        title={titleImage.alt}
        ml="1rem"
        sx={{ transform: "translateY(-10%)" }}
      />
    </Box>
  )
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <PitchCards
        title={titleWithImage || titleText}
        description={<RichText render={description} />}
        sections={sections}
        maxWidth={CONTAINER_WIDTHS}
        m="6rem 0 12rem"
        span={[12, 12, 6, 4]}
      />
    </React.Fragment>
  )
}

export default PitchCardsSlice
