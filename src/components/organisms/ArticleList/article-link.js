import React from "react"
import NextLink from "next/link"

function HandledLink({ link: Link, ...props }) {
  return typeof Link === "function" ? (
    <Link {...props} />
  ) : (
    <NextLink passHref href={Link.href} {...props} />
  )
}

export default HandledLink
