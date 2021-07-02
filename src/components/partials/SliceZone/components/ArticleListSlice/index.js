import React from "react"
import Image from "next/image"
import { Box } from "@rent_avail/layout"
import { ArticleList } from "components/organisms/ArticleList"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS } from "config"
import Link from "../Link"

const ArticleListSlice = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      background,
      color,
      skew,
      readMoreCardBackground,
      readMoreCardColor,
      readMoreCardTitle,
      readMoreCardContent,
      readMoreCardLink,
      readMoreCardLinkLabel,
    },
  } = slice
  const articles = slice.items.map(
    (
      {
        background: cardBg,
        tag,
        title: cardTitle,
        content,
        image,
        imageBackground,
        link,
        linkType,
        linkLabel,
        ...article
      },
      idx
    ) => ({
      uid: `${link.id}-${tag}-${idx}`,
      bg: cardBg,
      tag,
      title: (
        <Box>
          <RichText render={cardTitle} />
        </Box>
      ),
      content: (
        <Box>
          <RichText render={content} />
        </Box>
      ),
      image: image?.url && {
        element: (
          <Image
            src={image.url}
            alt={image.alt}
            title={image.alt}
            height={image.dimensions.height}
            width={image.dimensions.width}
          />
        ),
        bg: imageBackground !== "transparent" && imageBackground,
      },
      link: (props) => <Link link={link} {...props} />,
      linkType,
      linkLabel,
      ...article,
    })
  )
  const readMoreCard = {
    bg: readMoreCardBackground,
    color: readMoreCardColor,
    title: (
      <Box>
        <RichText render={readMoreCardTitle} />
      </Box>
    ),
    content: (
      <Box>
        <RichText render={readMoreCardContent} />
      </Box>
    ),
    action: {
      type: "button",
      label: readMoreCardLinkLabel,
    },
    link: (props) => <Link link={readMoreCardLink} {...props} />,
  }

  return (
    <ArticleList
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      title={title && <RichText render={title} />}
      description={description && <RichText render={description} />}
      articles={[...articles, readMoreCard]}
      skew={skew}
    />
  )
}

export default ArticleListSlice
