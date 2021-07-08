import React from "react"
import { Elements } from "prismic-reactjs"
import { linkResolver } from "src/prismic.config"
import { STYLING } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { getTargetProps } from "utils/link"
import { Box } from "@rent_avail/layout"
import Embed from "components/partials/SliceZone/components/Embed"
import Image from "next/image"
import { List, ListItem, OList } from "./components/List"
import { Text } from "./components/Text"
import { CustomLabel } from "./components/Label"

function createHeading(as, { key, ...props }, children) {
  return children?.[0] ? (
    React.createElement(Box, { as, key, ...props }, children)
  ) : (
    /** This a "hack", if we return NULL as we should've the RichText will
     * fall back to default implementation and will render empty heading tag */
    <React.Fragment key={key} />
  )
}

export default function htmlSerializer(props) {
  const urlResolver = useUrlResolver()
  return (type, element, content, children, key) => {
    switch (type) {
      case Elements.heading1:
        return createHeading(
          "h1",
          {
            ...props,
            sx: {
              ...STYLING.hero,
              ...props.sx,
            },
            key,
          },
          children
        )
      case Elements.heading2:
        return createHeading(
          "h2",
          {
            ...props,
            sx: {
              ...STYLING.headline,
              ...props.sx,
            },
            key,
          },
          children
        )
      case Elements.heading3:
        return createHeading(
          "h3",
          {
            ...props,
            sx: {
              ...STYLING.title,
              ...props.sx,
            },
            key,
          },
          children
        )
      case Elements.heading4:
        return createHeading(
          "h4",
          {
            ...props,
            sx: {
              ...STYLING.subtitle,
              ...props.sx,
            },
            key,
          },
          children
        )
      case Elements.heading5:
        return createHeading(
          "h5",
          {
            ...props,
            sx: {
              ...STYLING.body__emphasis,
              ...props.sx,
            },
            key,
          },
          children
        )
      case Elements.heading6:
        return createHeading("h6", { ...props, key }, children)
      case Elements.paragraph:
        return React.createElement(Text, { ...props, key }, children)
      case Elements.list:
        return React.createElement(List, { ...props, key }, children)
      case Elements.listItem:
        return React.createElement(ListItem, { ...props, key }, children)
      case Elements.oList:
        return React.createElement(OList, { ...props, key }, children)
      case Elements.hyperlink: {
        return React.createElement(
          "a",
          {
            href: urlResolver(element.data.url) || linkResolver(element.data),
            className: "link",
            ...props,
            ...getTargetProps(element.data.target),
            key,
          },
          children
        )
      }
      case Elements.label: {
        if (element.data?.label) {
          return React.createElement(
            CustomLabel,
            { ...props, ...element.data, key },
            children
          )
        }
        return <React.Fragment key={key}>{children}</React.Fragment>
      }
      case Elements.embed: {
        const { oembed } = element
        const { sx, embedSx } = props
        return (
          <Embed
            embed={oembed}
            {...props}
            sx={{
              ...sx,
              ...embedSx,
            }}
          />
        )
      }
      case Elements.image: {
        const { image } = element
        return (
          image && (
            <Image
              src={image.url}
              width={image.dimensions.width}
              height={image.dimensions.height}
              alt={image.alt}
              title={image.alt}
              layout="intrinsic"
              priority
            />
          )
        )
      }
      default:
        return null
    }
  }
}
