import React from "react"
import { motion } from "framer-motion"
import { Box, Col, Flex, Grid } from "@rent_avail/layout"
import { ChevronLeft, ChevronRight } from "react-feather"

import ControlChevron from "components/elements/ControlChevron"
import Video from "components/elements/Video"
import { useInViewAnimation } from "utils/animation"

function HowItWorksSection({
  copy,
  image = null,
  video,
  embed,
  flip,
  animationPreset,
  mb,
  carouselControl,
}) {
  const copyColumn = ["span 12", flip ? "7 / span 6" : "1 / span 6"]
  const imageColumn = ["span 12", flip ? "1 / span 6" : "7 / span 6"]

  const [presets, intersectionView] = useInViewAnimation({
    staggerDirection: flip ? -1 : 1,
    threshold: 0.25,
  })
  const animation = presets[animationPreset]

  return (
    <Grid
      as={motion.aside}
      {...animation?.container}
      alignItems="center"
      gridAutoFlow="row dense"
      mb={mb}
      ref={intersectionView}
    >
      <Col as={motion.aside} {...animation?.item} gridColumn={copyColumn}>
        {copy}
      </Col>
      <Col as={motion.aside} {...animation?.item} gridColumn={imageColumn}>
        <Flex sx={{ alignItems: "center" }}>
          <ControlChevron
            as={ChevronLeft}
            visibility={carouselControl?.shouldShow ? "visible" : "hidden"}
            enabled={carouselControl?.leftEnabled}
            onClick={carouselControl?.clickLeft}
            sx={{
              width: "4rem",
              strokeWidth: "3",
              color: carouselControl?.color
            }}
          />
          {!!image && <Box maxWidth="100%">{image}</Box>}
          {!!video?.url && <Video src={video.url} width="100%" />}
          {!!embed && <Box>{embed}</Box>}
          <ControlChevron
            as={ChevronRight}
            visibility={carouselControl?.shouldShow ? "visible" : "hidden"}
            enabled={carouselControl?.rightEnabled}
            onClick={carouselControl?.clickRight}
            sx={{
              width: "4rem",
              strokeWidth: "3",
              color: carouselControl?.color
            }}
          />
        </Flex>
      </Col>
    </Grid>
  )
}

export { HowItWorksSection }
