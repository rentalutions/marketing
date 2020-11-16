import React from "react"
import { Flex } from "@rent_avail/layout"
import { HeroUnit } from "slices"
import { Text } from "@rent_avail/typography"

const SliceZone = ({ slices }) => {
  if (!slices) {
    return null
  }
  return slices.map((slice) => {
    switch (slice.slice_type) {
      case "hero_unit":
        return <HeroUnit slice={slice} />
      default:
        return (
          <Flex
            my="2rem"
            border="2px solid red"
            alignContent="center"
            justifyContent="center"
          >
            <Text fontSize="2rem">
              Slice of type {slice.slice_type} is not implemented
            </Text>
          </Flex>
        )
    }
  })
}

export default SliceZone
