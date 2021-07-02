import React from "react"
import { Box } from "@rent_avail/layout"

function HandledLink({ link: Link, ...props }) {
  return typeof Link === "function" ? (
    <Link {...props} />
  ) : (
    <Box as="a" href={Link.href} {...props} />
  )
}

export default HandledLink
