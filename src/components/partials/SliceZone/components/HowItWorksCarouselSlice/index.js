import React from "react"
import Anchor from "components/elements/Anchor"
import { HowItWorksCarousel } from "components/organisms/HowItWorks"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"
import howItWorksSliceSection from "../HowItWorksSectionsSlice/how-it-works-slice-section"

const HowItWorksCarouselSlice = ({ slice }) => {
  const {
    primary: { title, background, color, flip, hash, stepInterval, skew },
  } = slice
  const sections = slice.items.map((props, idx) =>
    howItWorksSliceSection({ idx, ...props })
  )
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <HowItWorksCarousel
        title={<RichText render={title} />}
        sections={sections}
        stepInterval={stepInterval}
        bg={background}
        color={color}
        skew={skew}
        containerWidth={CONTAINER_WIDTHS}
        py="5rem"
        alternate={() => flip}
      />
    </React.Fragment>
  )
}

export default HowItWorksCarouselSlice
