import React, { useMemo } from "react"
import Anchor from "components/elements/Anchor"
import { HowItWorksCarousel } from "components/organisms/HowItWorks"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"
import { transformSliceToSection } from "../HowItWorksSectionsSlice"

const HowItWorksCarouselSlice = ({ slice }) => {
  const {
    primary: { title, background, color, flip, hash, stepInterval, skew },
    items,
  } = slice
  const sections = useMemo(
    () => items.map((props, idx) => transformSliceToSection({ idx, ...props })),
    [items]
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
