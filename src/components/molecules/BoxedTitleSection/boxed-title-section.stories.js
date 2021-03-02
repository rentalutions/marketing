import React from "react"
import { Button } from "@rent_avail/controls"
import { Box, Flex } from "@rent_avail/layout"
import { STYLING } from "config"
import BoxedTitleSection from "./index"

export default {
  title: "Components/BoxedTitleSection",
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
    <Box width="100%" py="4rem" background="#F9F9F9">
      <BoxedTitleSection
        titleBackground="#E9EDF1"
        title={
          <Box as="h1" sx={STYLING.headline}>
            Title
          </Box>
        }
      >
        <Content />
      </BoxedTitleSection>
    </Box>
  )
}

export function Left() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <BoxedTitleSection
        orientation="left"
        titleBackground="#E9EDF1"
        title={
          <Box as="h1" sx={STYLING.headline}>
            Title
          </Box>
        }
      >
        <Content />
      </BoxedTitleSection>
    </Box>
  )
}

export function NoOverflow() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <BoxedTitleSection
        overflow={false}
        titleBackground="#E9EDF1"
        title={
          <Box as="h1" sx={STYLING.headline}>
            Title
          </Box>
        }
      >
        <Content />
      </BoxedTitleSection>
    </Box>
  )
}

export function NoOverflowLeft() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <BoxedTitleSection
        overflow={false}
        orientation="left"
        titleBackground="#E9EDF1"
        title={
          <Box as="h1" sx={STYLING.headline}>
            Title
          </Box>
        }
      >
        <Content />
      </BoxedTitleSection>
    </Box>
  )
}
