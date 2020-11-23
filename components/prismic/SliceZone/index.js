import React from "react"
import { Flex } from "@rent_avail/layout"
import {
  EmailCapture,
  HeroUnit,
  HowItWorks,
  NavBar,
  PitchCards,
  ShowCase,
} from "slices"
import { Text } from "@rent_avail/typography"
import { useTheme } from "styled-components"

const SliceZone = ({ slices }) => {
  if (!slices) {
    return null
  }
  const { colors } = useTheme()
  return slices.map((slice, idx) => {
    const key = `${slice.slice_type}-${slice.version}-${idx}`
    switch (slice.slice_type) {
      case "hero_unit":
        return <HeroUnit key={key} slice={slice} />
      case "nav_bar":
        return <NavBar key={key} slice={slice} />
      case "pitch_cards":
        return <PitchCards key={key} slice={slice} />
      case "email_capture":
        return <EmailCapture key={key} slice={slice} />
      case "how_it_works":
        return <HowItWorks key={key} slice={slice} />
      case "show_case":
        return <ShowCase key={key} slice={slice} />
      default:
        return (
          <Flex
            p="2rem"
            border={`2px dashed ${colors.red_500}`}
            alignContent="center"
            justifyContent="center"
            bg="red_300"
            color="ui_100"
            key="slice_warning"
          >
            <Text fontSize="3rem" fontWeight="800">
              Slice of type {slice.slice_type} is not implemented
            </Text>
          </Flex>
        )
    }
  })
}

export default SliceZone
