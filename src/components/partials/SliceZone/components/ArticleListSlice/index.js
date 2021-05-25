import React from "react"
import { Box } from "@rent_avail/layout"
import { ArticleList } from "components/organisms/ArticleList"
import RichText from "components/partials/SliceZone/components/RichText"
import { CONTAINER_WIDTHS } from "config"
import Link from "../Link"

const ArticleListSlice = ({ slice }) => {
  const {
    primary: { title, background, color, skew },
  } = slice
  const articles = slice.items.map(
    (
      {
        background: cardBg,
        content,
        image,
        imageBackground,
        link,
        actionType,
        actionLabel,
        ...article
      },
      idx
    ) => ({
      uid: `${link.id}-${title}-${idx}`,
      bg: cardBg,
      content: (
        <Box>
          <RichText render={content} />
        </Box>
      ),
      action: actionType !== "none" && {
        type: actionType,
        label: actionLabel,
      },
      image: image?.url && {
        ...image,
        bg: imageBackground !== "transparent" && imageBackground,
      },
      link: (props) => <Link link={link} {...props} />,
      ...article,
    })
  )

  return (
    <ArticleList
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      title={title && <RichText render={title} />}
      articles={articles}
      skew={skew}
    />
  )
}

export default ArticleListSlice