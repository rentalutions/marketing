import React from "react"
import NextLink from "next/link"
import { useUrlResolver } from "components/partials/UrlResolver"

const LinkType = {
  Web: "Web",
  Document: "Document",
  Media: "Media",
}

const Link = ({ link, children, ...props }) => {
  const linkType = link.link_type

  const urlResolver = useUrlResolver()

  const { href, target } = (() => {
    switch (linkType) {
      case LinkType.Document:
        return {
          href: {
            pathname: "/[type]/[uid]",
            query: { type: link.type, uid: link.uid },
          },
        }
      case LinkType.Media:
        return {
          href: link.url,
          target: "_blank",
        }
      case LinkType.Web:
      default:
        return {
          href: urlResolver(link.url),
          target: link.target,
        }
    }
  })()

  return (
    <NextLink passHref href={href} {...props}>
      {React.cloneElement(children, {
        ...(target && { target, rel: "noopener" }),
      })}
    </NextLink>
  )
}

export default Link
