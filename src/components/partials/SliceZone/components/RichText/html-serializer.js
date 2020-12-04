import React from "react"
import { Elements } from "prismic-reactjs"
import { Heading } from "@rent_avail/typography"
import { linkResolver } from "src/prismic.config"
import {
  List,
  ListItem,
  OList,
} from "components/partials/SliceZone/components/RichText/components/List"
import { H1_SIZING, H2_SIZING, H3_SIZING } from "config"

const createHeading = (as, props, children) => {
  return children && children[0] ? (
    React.createElement(Heading, { as, ...props }, children)
  ) : (
    /** This a "hack", if we return NULL as we should've the RichText will
     * fall back to default implementation and will render empty heading tag */
    <React.Fragment />
  )
}

const htmlSerializer = (props) => {
  return (type, element, content, children, key) => {
    switch (type) {
      case Elements.heading1:
        return createHeading(
          "h1",
          {
            ...H1_SIZING,
            ...props,
            key,
          },
          children
        )
      case Elements.heading2:
        return createHeading(
          "h2",
          {
            ...H2_SIZING,
            ...props,
            key,
          },
          children
        )
      case Elements.heading3:
        return createHeading(
          "h3",
          {
            ...H3_SIZING,
            ...props,
            key,
          },
          children
        )
      case Elements.heading4:
        return createHeading("h4", { ...props, key }, children)
      case Elements.heading5:
        return createHeading("h5", { ...props, key }, children)
      case Elements.heading6:
        return createHeading("h6", { ...props, key }, children)
      case Elements.list:
        return React.createElement(List, { ...props, key }, children)
      case Elements.listItem:
        return React.createElement(ListItem, { ...props, key }, children)
      case Elements.oList:
        return React.createElement(OList, { ...props, key }, children)
      case Elements.hyperlink: {
        const targetAttr = element.data.target
          ? { target: element.data.target }
          : {}
        const relAttr = element.data.target ? { rel: "noopener" } : {}
        return React.createElement(
          "a",
          {
            href: element.data.url || linkResolver(element.data),
            className: "link",
            ...targetAttr,
            ...relAttr,
            ...props,
            key,
          },
          children
        )
      }
      default:
        return null
    }
  }
}

export default htmlSerializer
