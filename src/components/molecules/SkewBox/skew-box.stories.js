import React from "react"
import { Button } from "@rent_avail/controls"
import { Box, Flex } from "@rent_avail/layout"
import SkewBox from "./index"

export default {
  title: "Components/SkewBox",
}

function Content() {
  return (
    <Flex
      flexDirection="column"
      p="2rem"
      height="18rem"
      textAlign="center"
      justifyContent="center"
    >
      <Box as="h3">Content</Box>
      <Button>Void</Button>
    </Flex>
  )
}

export function Default() {
  return (
    <SkewBox bg="#E9EDF1">
      <Content />
    </SkewBox>
  )
}

export function Right() {
  return (
    <SkewBox skew="right" bg="#E9EDF1">
      <Content />
    </SkewBox>
  )
}

export function Left() {
  return (
    <SkewBox skew="left" bg="#E9EDF1">
      <Content />
    </SkewBox>
  )
}
