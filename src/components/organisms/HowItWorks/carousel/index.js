import React, { cloneElement, useMemo } from "react"
import { motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Box, Container } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import SkewBox from "components/molecules/SkewBox"
import { useCarousel } from "components/molecules/Carousel/use-carousel"
import { analyzeColor } from "utils/color-scheme"
import { STYLING } from "config"
import { HowItWorksSection } from "../how-it-works-section"

function HowItWorksCarousel({
  title,
  eyebrow,
  sections = [],
  stepInterval,
  containerWidth,
  animationPreset = "fadeIn",
  bg,
  ...props
}) {
  const [presets, intersectionView] = useInViewAnimation({ threshold: 0.05 })
  const animation = presets[animationPreset]

  const [activeItem, visibleItems, activeIndex, navigateToItem] = useCarousel(sections, {
    visibleItemsLenght: sections.length,
    interval: stepInterval,
  })

  const [_, isDark] = bg ? analyzeColor(bg) : []
  const colorScheme = useMemo(
    () => isDark ? ["blue_300", "ui_100"] : ["blue_100", "blue_500"],
    [isDark],
  )

  return (
    <SkewBox as={motion.aside} {...animation?.container} bg={bg} {...props}>
      <Container
        ref={intersectionView}
        {...(containerWidth && { maxWidth: containerWidth })}
      >
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
        {activeItem && (
          <HowItWorksSection
            {...activeItem}
            flip={false}
            animationPreset={animationPreset}
            carouselControl={{
              shouldShow: true,
              color: colorScheme[1],
              leftEnabled: activeIndex > 0,
              clickLeft: () => {navigateToItem(-1)},
              rightEnabled: activeIndex < sections.length - 1,
              clickRight: () => {navigateToItem(1)},
            }}
          />
        )}
        <Box as={motion.aside} {...animation?.item}>
          {sections
            .filter((section) =>
              visibleItems.some(({ item }) => item === section)
            )
            .map((section) => (
              <Box
                sx={{
                  bg: colorScheme[+(sections[activeIndex] === section)],
                  width: "1.25rem",
                  height: "1.25rem",
                  m: 1,
                  display: "inline-block",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
                onClick={() => {
                  visibleItems.find(({ item }) => item === section).selectItem()
                }}
              />
            ))}
        </Box>
      </Container>
    </SkewBox>
  )
}

export { HowItWorksCarousel }
