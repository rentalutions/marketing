import React, { cloneElement } from "react"
import { m as motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Box, Grid, Col, Container } from "@rent_avail/layout"
import { analyzeColor } from "utils/color-scheme"
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
  const [, isDark] = background ? analyzeColor(background) : []
  return (
    <Box
      as={motion.aside}
      {...animation?.container}
      {...props}
      ref={intersectionView}
    >
      <Box>
        <Box
          color={isDark ? "ui_100" : "inherit"}
          bg={background}
          as={motion.aside}
          {...animation?.container}
        >
          <Container maxWidth={containerWidth}>
            {eyebrow && (
              <Text
                as={motion.aside}
                {...animation?.item}
                color={isDark ? "ui_100" : "inherit"}
                mb="1rem"
              >
                {eyebrow}
              </Text>
            )}
            {title && (
              <motion.aside {...animation?.item}>
                {cloneElement(title, {
                  pb: "4rem",
                  sx: { ...STYLING.headline, ...title.props?.sx },
                })}
              </motion.aside>
            )}
          </Container>
        </Box>
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
  const [, isDark] = alternateBackground ? [] : analyzeColor(background)
  return (
    <SkewBox
      color={isDark ? "blue_100" : "inherit"}
      skew={skew}
      bg={alternateBackground ? "transparent" : background}
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
        px="2rem"
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
