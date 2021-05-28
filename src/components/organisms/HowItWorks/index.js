import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import Video from "components/elements/Video"
import { STYLING } from "config"

function HowItWorks({
  title,
  eyebrow,
  sections = [],
  alternate = (idx) => idx % 2 !== 0,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [presets, intersectionView] = useInViewAnimation({ threshold: 0.05 })
  const animation = presets[animationPreset]

  return (
    <Box
      as={motion.aside}
      {...animation?.container}
      {...props}
      ref={intersectionView}
    >
      <Container {...(containerWidth && { maxWidth: containerWidth })}>
        {eyebrow && (
          <Text
            as={motion.aside}
            {...animation?.item}
            color="blue_500"
            mb="1rem"
          >
            {eyebrow}
          </Text>
        )}
        {title && (
          <motion.aside {...animation?.item}>
            {cloneElement(title, {
              mb: "4rem",
              sx: { ...STYLING.headline, ...title.props?.sx },
            })}
          </motion.aside>
        )}
        {sections.map(({ uid, ...section }, idx) => (
          <HowItWorksSection
            key={uid || idx}
            {...section}
            flip={alternate(idx)}
            animationPreset={animationPreset}
            mb={idx !== sections.length - 1 ? "6rem" : 0}
          />
        ))}
      </Container>
    </Box>
  )
}

function HowItWorksSection({
  copy,
  image = null,
  video,
  embed,
  flip,
  animationPreset,
  mb,
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
        {!!image && <Box maxWidth="100%">{image}</Box>}
        {!!video?.url && <Video src={video.url} width="100%" />}
        {!!embed && <Box>{embed}</Box>}
      </Col>
    </Grid>
  )
}

export { HowItWorks }
