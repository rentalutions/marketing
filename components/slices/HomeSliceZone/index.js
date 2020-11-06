import React from "react"
import { Container } from "@rent_avail/layout"
import PitchCardsSlice from "../PitchCardsSlice"
import RichTextSlice from "../RichTextSlice"

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
