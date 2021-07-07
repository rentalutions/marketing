import React from "react"
import { Box } from "@rent_avail/layout"

function ArticleLink({ link: Link, children, ...props }) {
  return typeof Link === "function" ? (
    <Link>
      <Box as="a" {...props}>
        {children}
      </Box>
    </Link>
  ) : (
    <Box as="a" href={Link.href} {...props}>
      {children}
    </Box>
  )
}

export default ArticleLink
