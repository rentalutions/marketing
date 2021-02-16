import React, { cloneElement, useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Box, Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { useInViewAnimation } from "utils/animation"
import SkewBox from "components/molecules/SkewBox"
import BoxedTitleSection from "components/molecules/BoxedTitleSection"
import { STYLING } from "config"
import Picture from "./picture"

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
  const [currentInterval, setCurrentInterval] = useState(testimonialInterval)

  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestiomnial =
    testimonials.length > activeIndex ? testimonials[activeIndex] : null
  const { quote: Quote, author, titleAndLocation, aditionalInfo } =
    activeTestiomnial || {}

  const [presets, animationIntersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  const getSafeIndex = useCallback(
    (desiredIndex) => {
      const { length } = testimonials
      if (!length) return undefined
      const remainder = desiredIndex % length
      const safeIndex = remainder < 0 ? remainder + length : remainder
      return safeIndex
    },
    [testimonials]
  )

  useEffect(() => {
    if (currentInterval) {
      const timeout = setTimeout(() => {
        const nextIndex = getSafeIndex(activeIndex + 1)
        if (nextIndex !== undefined) {
          setActiveIndex(nextIndex)
        }
      }, currentInterval * 1000)
      return () => {
        clearInterval(timeout)
      }
    }
  }, [currentInterval, testimonials, activeIndex])

  const carouselItems = [
    {
      testimonialIndex: getSafeIndex(activeIndex - 2),
      level: 2,
    },
    {
      testimonialIndex: getSafeIndex(activeIndex - 1),
      level: 1,
    },
    {
      testimonialIndex: getSafeIndex(activeIndex),
      level: 0,
    },
    {
      testimonialIndex: getSafeIndex(activeIndex + 1),
      level: 1,
    },
    {
      testimonialIndex: getSafeIndex(activeIndex + 2),
      level: 2,
    },
  ]

  return (
    <SkewBox
      as={motion.aside}
      {...animation?.container}
      bg={bg}
      {...props}
    >
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
          <Box
            as={motion.div}
            {...animation?.item}
            mt="auto"
            mx={3}
          >
            {typeof Quote === "function" ? <Quote /> : Quote}
          </Box>
          <Flex
            justifyContent="center"
            sx={{
              gap: 3,
            }}
          >
            {carouselItems.map(({ testimonialIndex, level }, itemIndex) => {
              const testimonial =
                testimonialIndex >= 0 && testimonials[testimonialIndex]
              if (!testimonial) return null
              const { picture, author: itemAuthor } = testimonial
              return (
                <Picture
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${itemAuthor}-${itemIndex}`} // no-array-index-key disabled bc the author will repeat when testimonials lenght < 5
                  as={motion.div}
                  {...animation?.item}
                  level={level}
                  picture={picture}
                  altFallback={itemAuthor}
                  onClick={() => {
                    setActiveIndex(testimonialIndex)
                    setCurrentInterval(0)
                  }}
                />
              )
            })}
          </Flex>
          <Box
            as={motion.div}
            {...animation?.item}
            mb={1}
          >
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
