import React from "react"
import { Box } from "@rent_avail/layout"
import { Blockquote } from "./index"

export default { title: "Components/Blockquote" }

export function Default() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <Blockquote
        content={
          <Box as="h1">
            Eque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, qui adipisci velit.{" "}
          </Box>
        }
      />
    </Box>
  )
}

export function AlignRight() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <Blockquote
        textAlign="right"
        content={
          <Box as="h1">
            Eque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, qui adipisci velit.{" "}
          </Box>
        }
      />
    </Box>
  )
}

export function WhiteBackgroung() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <Blockquote
        bg="ui_100"
        content={
          <Box as="h1">
            Eque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, qui adipisci velit.{" "}
          </Box>
        }
      />
    </Box>
  )
}

export function Dark() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <Blockquote
        bg="blue_700"
        textColor="ui_300"
        quoteColor="blue_500"
        content={
          <Box as="h1">
            Eque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, qui adipisci velit.{" "}
          </Box>
        }
      />
    </Box>
  )
}
