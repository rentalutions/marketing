import React from "react"
import Anchor from "components/elements/Anchor"
import { HowItWorksSections } from "components/organisms/HowItWorks"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"
import howItWorksSliceSection from "./how-it-works-slice-section"

const HowItWorksSectionsSlice = ({ slice }) => {
  const {
    primary: { title, background, flip, hash },
  } = slice
  const sections = slice.items.map((props, idx) =>
    howItWorksSliceSection({ idx, ...props })
  )
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <HowItWorksSections
        title={<RichText render={title} />}
        sections={sections}
        bg={background}
        containerWidth={CONTAINER_WIDTHS}
        py="5rem"
        alternate={flip ? (idx) => idx % 2 === 0 : undefined}
        color={background === "blue_500" ? "blue_100" : "inherit"}
      />
    </React.Fragment>
  )
}

export default HowItWorksSectionsSlice
