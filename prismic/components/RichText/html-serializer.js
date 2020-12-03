import React from "react"
import { Elements } from "prismic-reactjs"
import { Heading } from "@rent_avail/typography"
import { linkResolver } from "prismic/prismic.config"
import { List, ListItem, OList } from "prismic/components/List"
import { h1Sizing, h2Sizing, h3Sizing } from "lib/config"

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
            ...h1Sizing,
            ...props,
            key,
          },
          children
        )
      case Elements.heading2:
        return createHeading(
          "h2",
          {
            ...h2Sizing,
            ...props,
            key,
          },
          children
        )
      case Elements.heading3:
        return createHeading(
          "h3",
          {
            ...h3Sizing,
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
