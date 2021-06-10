import React, { cloneElement } from "react"
import { m as motion } from "framer-motion"
import { Box, Grid, Flex } from "@rent_avail/layout"
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
  testimonialInterval = 10,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [
    { quote: Quote, author, titleAndLocation, additionalInfo },
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
        minHeight="36rem"
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
        childrenWrapperProps={{
          display: "grid",
        }}
      >
        <Grid
          ref={animationIntersectionView}
          gap={2}
          gridTemplateColumns="1fr"
          width={["100%", "100%", "28rem"]}
          margin={[
            "unset",
            "unset",
            orientation === "left"
              ? "auto 3rem 1rem auto"
              : "auto auto 1rem 3rem",
          ]}
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            as={motion.div}
            {...animation?.item}
            sx={{
              minHeight: "12rem",
              alignItems: "end",
              display: "grid",
            }}
          >
            {typeof Quote === "function" ? <Quote /> : Quote}
          </Box>
          <Flex
            as={motion.div}
            {...animation?.item}
            justifyContent="space-between"
            alignItems="center"
          >
            {visibleItems.map(({ item, level, selectItem }, itemIndex) => {
              const { picture, author: itemAuthor } = item
              return (
                <TestimonialsCarouselItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${itemAuthor}-${itemIndex}`} // no-array-index-key disabled bc the author will repeat when testimonials lenght < 5
                  level={level}
                  picture={picture}
                  onClick={selectItem}
                />
              )
            })}
          </Flex>
          <Box as={motion.div} {...animation?.item}>
            {!!author && (
              <Text fontSize="1.5rem" fontWeight="black">
                {author}
              </Text>
            )}
            {!!titleAndLocation && (
              <Text fontSize="1.3rem" opacity={0.45}>
                {titleAndLocation}
              </Text>
            )}
            {!!additionalInfo && (
              <Text fontSize="1.3rem" opacity={0.45}>
                {additionalInfo}
              </Text>
            )}
          </Box>
        </Grid>
      </BoxedTitleSection>
    </SkewBox>
  )
}

export default TestimonialsCarousel
