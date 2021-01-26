import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import { useInViewAnimation } from "components/@rent_avail/utils"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
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
  const [ presets, intersectionView ] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <Box {...props} ref={intersectionView}>
      <Container {...(containerWidth && { maxWidth: containerWidth })}>
        {eyebrow && (
          <motion.aside {...animation}>
            <Text color="blue_500" mb="1rem">
              {eyebrow}
            </Text>
          </motion.aside>
        )}
        {title &&
          <motion.aside {...animation}>
            {cloneElement(title, {
              mb: "4rem",
              sx: { ...STYLING.headline, ...title.props?.sx },
            })}
          </motion.aside>
        }
        {sections.map((section, idx) => (
          <motion.aside {...animation} transition={{
            ...animation.transition,
            delay: 0.75 + (idx * 0.25)
          }}>
            <HowItWorksSection
              {...section}
              key={section.uid || idx}
              flip={alternate(idx)}
              mb={idx !== sections.length - 1 ? "6rem" : 0}
            />
          </motion.aside>
        ))}
      </Container>
    </Box>
  )
}

function HowItWorksSection({ copy, image = null, video, embed, flip, mb }) {
  const copyColumn = ["span 12", flip ? "7 / span 6" : "1 / span 6"]
  const imageColumn = ["span 12", flip ? "1 / span 6" : "7 / span 6"]
  return (
    <Grid alignItems="center" gridAutoFlow="row dense" mb={mb}>
      <Col gridColumn={copyColumn}>{copy}</Col>
      {image?.url && (
        <Col
          as="img"
          src={image.url}
          alt={image.alt}
          title={image.alt}
          gridColumn={imageColumn}
          maxWidth="100%"
        />
      )}
      {!!video?.url && (
        <Col
          as="video"
          width="100%"
          gridColumn={imageColumn}
          maxWidth="100%"
          controls
          src={video.url}
        />
      )}
      {!!embed && (
        <Col gridColumn={imageColumn} maxWidth="100%">
          {embed}
        </Col>
      )}
    </Grid>
  )
}

export { HowItWorks }
