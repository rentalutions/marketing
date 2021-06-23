import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Box, Container } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { STYLING } from "config"
import { HowItWorksSection } from "./how-it-works-section"

function HowItWorksSections({
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

export { HowItWorksSections }
