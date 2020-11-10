import React from "react"
import { Container } from "@rent_avail/layout"
import PitchCardsSlice from "../pitch-cards-slice"
import RichTextSlice from "../rich-text-slice"

const HomeSliceZone = ({ slices }) => (
  <Container sx={{ mt: "4rem" }}>
    {slices.map((slice, index) => {
      switch (slice.type) {
        case "pitch_cards":
          return <PitchCardsSlice slice={slice} key={index} />
        case "text":
          return <RichTextSlice slice={slice} key={index} />
      }
    })}
  </Container>
)

export default HomeSliceZone
