import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import SkewBox from "components/molecules/SkewBox"
import Video from "components/elements/Video"
import { STYLING } from "config"

function HowItWorks({
  title,
  eyebrow,
  skew,
  sections = [],
  alternate = (idx) => idx % 2 !== 0,
  containerWidth,
  alternateBackground = false,
  background,
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
      <Box>
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
            containerWidth={containerWidth}
            key={uid || idx}
            {...section}
            skew={skew}
            background={background === "transparent" ? null : background}
            alternateBackground={alternateBackground ? !(idx % 2 === 0) : false}
            flip={alternate(idx)}
            animationPreset={animationPreset}
            mb={idx !== sections.length - 1 ? "6rem" : 0}
          />
        ))}
      </Box>
    </Box>
  )
}

function HowItWorksSection({
  copy,
  image = null,
  video,
  embed,
  skew,
  background,
  alternateBackground,
  flip,
  animationPreset,
  containerWidth,
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
    <SkewBox
      color={
        background === "blue_500" && alternateBackground
          ? "inherit"
          : "blue_100"
      }
      skew={skew}
      bg={
        background === "blue_500" && alternateBackground
          ? "transparent"
          : "blue_500"
      }
      as={motion.aside}
      {...animation?.container}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        sx={{
          maxWidth: containerWidth,
        }}
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
    </SkewBox>
  )
}

export { HowItWorks }
