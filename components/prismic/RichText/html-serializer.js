import React from "react"
import { Elements } from "prismic-reactjs"
import { Heading } from "@rent_avail/typography"
import { linkResolver } from "@prismic-config"

const withKey = (props, key) => {
  return Object.assign(props || {}, { key })
}

const createHeading = (as, props, children, key) => {
  return React.createElement(Heading, withKey({ as, ...props }, key), children)
}

const htmlSerializer = (props) => {
  return (type, element, content, children, key) => {
    switch (type) {
      case Elements.heading1:
        return createHeading("h1", props, children, key)
      case Elements.heading2:
        return createHeading("h2", props, children, key)
      case Elements.heading3:
        return createHeading("h3", props, children, key)
      case Elements.heading4:
        return createHeading("h4", props, children, key)
      case Elements.heading5:
        return createHeading("h5", props, children, key)
      case Elements.heading6:
        return createHeading("h6", props, children, key)
      case Elements.hyperlink: {
        const targetAttr = element.data.target
          ? { target: element.data.target }
          : {}
        const relAttr = element.data.target ? { rel: "noopener" } : {}
        return React.createElement(
          "a",
          withKey(
            {
              href: element.data.url || linkResolver(element.data),
              className: "link",
              ...targetAttr,
              ...relAttr,
              ...props,
            },
            key
          ),
          children
        )
      }
      default:
        return null
    }
  }
}

export default htmlSerializer
