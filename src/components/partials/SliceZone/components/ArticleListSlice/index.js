import React from "react"
import Image from "next/image"
import { ArticleList } from "components/organisms/ArticleList"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS, STYLING } from "config"
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
      title: <RichText render={cardTitle} />,
      content: <RichText render={content} />,
      width: ["26rem", "26rem", "26rem", "24rem", "28rem"],
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

  const renderReadMoreCard =
    readMoreCardTitle?.[0]?.title ||
    readMoreCardTitle?.[0]?.text ||
    (readMoreCardLinkLabel && readMoreCardLink?.url)

  const readMoreCard = renderReadMoreCard && {
    uid: "read-more-card",
    bg: readMoreCardBackground || "blue_100",
    color: readMoreCardColor,
    title: <RichText sx={{ ...STYLING.subtitle }} render={readMoreCardTitle} />,
    content: <RichText render={readMoreCardContent} />,
    link: (props) => <Link link={readMoreCardLink} {...props} />,
    linkType: "button",
    linkLabel: readMoreCardLinkLabel,
    sx: { boxShadow: "none" },
  }

  return (
    <ArticleList
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      title={title && <RichText render={title} />}
      description={description && <RichText render={description} />}
      articles={[...articles, ...(renderReadMoreCard ? [readMoreCard] : [])]}
      skew={skew}
    />
  )
}

export default ArticleListSlice
