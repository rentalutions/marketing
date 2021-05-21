import React from "react"
import { Box } from "@rent_avail/layout"
import { PitchCards } from "components/organisms/PitchCards"
import Anchor from "components/elements/Anchor"
import { CONTAINER_WIDTHS } from "config"
import Link from "components/partials/SliceZone/components/Link"
import { Button } from "@rent_avail/controls"
import { Text } from "@rent_avail/typography"
import Image from "next/image"
import Embed from "../Embed"
import RichText from "../RichText"

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
        video,
        embed,
        linkText,
        linkUrl,
        linkId,
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
      icon: icon?.url && (
        <Image
          src={icon.url}
          width={icon.dimensions.width}
          height={icon.dimensions.height}
          alt={icon.alt}
          title={icon.alt}
        />
      ),
      video,
      embed: embed?.html && <Embed embed={embed} />,
      key: title?.[0]?.text || idx,
      link: linkText ? (
        <Link link={linkUrl}>
          {linkAsButton ? (
            <Button as="a" id={linkId}>
              {linkText}
            </Button>
          ) : (
            <Text as="a" id={linkId} color="blue_700">
              {linkText}
            </Text>
          )}
        </Link>
      ) : null,
      variant: linkAsButton && "button",
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
    <Box
      sx={{
        textAlign: centerTitle ? "center" : "inherit",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        mt: "-1rem",
      }}
    >
      <RichText
        sx={{
          color: "blue_500",
          mt: "1rem",
        }}
        render={title}
      />
      <Box
        sx={{
          transform: "translateY(-10%)",
          mt: "1rem",
          ml: "1rem",
        }}
      >
        <Image
          src={titleImage.url}
          width={titleImage.dimensions.width}
          height={titleImage.dimensions.height}
          alt={titleImage.alt}
          title={titleImage.alt}
        />
      </Box>
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
        span={
          sections.length < 3 ? [12, 12, 12 / sections.length] : [12, 12, 6, 4]
        }
      />
    </React.Fragment>
  )
}

export default PitchCardsSlice
