import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import { Box, Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { useInViewAnimation } from "utils/animation"

import { useCarousel } from "components/molecules/Carousel/use-carousel"
import SkewBox from "components/molecules/SkewBox"
import BoxedTitleSection from "components/molecules/BoxedTitleSection"
import { STYLING } from "config"
import TestimonialsCarouselItem from "./testimonials-carousel-item"

function TestimonialsCarousel({
  bg,
  titleBackground,
  title,
  testimonials = [],
  testimonialBg,
  testimonialColor,
  orientation = "right",
  testimonialInterval = 3,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [
    { quote: Quote, author, titleAndLocation, aditionalInfo },
    visibleItems,
  ] = useCarousel(testimonials, { interval: testimonialInterval })

  const [presets, animationIntersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <SkewBox as={motion.aside} {...animation?.container} bg={bg} {...props}>
      <BoxedTitleSection
        as={motion.div}
        {...animation?.container}
        containerWidth={containerWidth}
        orientation={orientation}
        titleBackground={titleBackground}
        title={
          title &&
          cloneElement(title, {
            sx: {
              ...STYLING.headline,
              ...title?.props?.sx,
            },
          })
        }
      >
        <Flex
          ref={animationIntersectionView}
          sx={{
            minHeight: "36rem",
            padding: 2,
            gap: 2,
            flexFlow: "column",
            textAlign: "center",
          }}
        >
          <Box as={motion.div} {...animation?.item} mt="auto" mx={3}>
            {typeof Quote === "function" ? <Quote /> : Quote}
          </Box>
          <Flex
            as={motion.div}
            {...animation?.item}
            justifyContent="center"
            sx={{
              gap: 3,
            }}
          >
            {visibleItems.map(({ item, level, selectItem }, itemIndex) => {
              const { picture, author: itemAuthor } = item
              return (
                <TestimonialsCarouselItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${itemAuthor}-${itemIndex}`} // no-array-index-key disabled bc the author will repeat when testimonials lenght < 5
                  level={level}
                  picture={picture}
                  altFallback={itemAuthor}
                  onClick={selectItem}
                />
              )
            })}
          </Flex>
          <Box as={motion.div} {...animation?.item} mb={1}>
            <Text fontSize="1.5rem" fontWeight="black">
              {author}
            </Text>
            <Text fontSize="1.3rem" opacity={0.45}>
              {titleAndLocation}
            </Text>
            <Text fontSize="1.3rem" opacity={0.45}>
              {aditionalInfo || "-"}
            </Text>
          </Box>
        </Flex>
      </BoxedTitleSection>
    </SkewBox>
  )
}

export default TestimonialsCarousel
