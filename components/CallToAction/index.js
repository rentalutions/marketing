import * as React from "react"
import { Box, Container } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import Link from "next/link"

function CallToAction({ copy: Copy, link, ...props }) {
  return (
    <Box {...props}>
      <Container>
        <Box textAlign="center">
          {typeof Copy === "function" ? <Copy /> : Copy}
          <Link href={link.url}>
            <Button as="a" display="inline-block" mt="2rem">
              {link.text}
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export { CallToAction }
