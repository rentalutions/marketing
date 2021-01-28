import React, { cloneElement, useCallback, useEffect, useState } from "react"
import { Box, Container, Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"

import SkewBox from "components/molecules/SkewBox"
import { STYLING } from "config"

function Testimonials({
  bg,
  titleBackground,
  title,
  testimonials = [],
  testimonialBg,
  testimonialColor,
  orientation = "right",
  testimonialInterval = 3,
  containerWidth,
  ...props
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentInterval, setCurrentInterval] = useState(testimonialInterval)

  const activeTestiomnial =
    testimonials.length > activeIndex ? testimonials[activeIndex] : null
  const { quote: Quote, author, titleAndLocation, aditionalInfo } =
    activeTestiomnial || {}

  const getSafeIndex = useCallback(
    (desiredIndex) => {
      const { length } = testimonials
      const remainder = desiredIndex % length
      return remainder < 0 ? remainder + length : remainder
    },
    [testimonials]
  )

  useEffect(() => {
    if (currentInterval) {
      const timeout = setTimeout(() => {
        const nextIndex = getSafeIndex(activeIndex + 1)
        setActiveIndex(nextIndex)
      }, currentInterval * 1000)
      return () => {
        clearInterval(timeout)
      }
    }
  }, [currentInterval, testimonials, activeIndex])

  const Picture = useCallback((testimonialIndex, level = 0) => {
    const { picture, author: altFallback } =
      testimonials[testimonialIndex] || {}
    const [opacity, scale] = (() => {
      if (level >= 3) return [0.9, 0.5625]
      if (level === 2) return [0.75, 0.625]
      if (level === 1) return [0.5, 0.75]
      return [0, 1]
    })()
    return (
      <Box
        onClick={() => {
          setActiveIndex(testimonialIndex)
          setCurrentInterval(0)
        }}
        position="relative"
        width="4rem"
        height="4rem"
        sx={{
          transform: `scale(${scale})`,
          "& > *": {
            borderRadius: "50%",
            width: "100%",
            height: "100%",
          },
        }}
      >
        <Box
          position="absolute"
          background="white"
          opacity={opacity}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
        {picture && (
          <Box
            as="img"
            src={picture.url}
            alt={picture.alt || altFallback}
            title={picture.alt || altFallback}
          />
        )}
      </Box>
    )
  })

  const titleBoxVariants = {
    right: {
      textAlign: "right",
      padding: "4rem 2rem 4rem 50vw",
      ml: "-50vw",
      borderRadius: "0 2.5rem 2.5rem 0",
    },
    left: {
      textAlign: "left",
      padding: "4rem 50vw 4rem 2rem",
      mr: "-50vw",
      borderRadius: "2.5rem 0 0 2.5rem",
    },
  }

  return (
    <SkewBox bg={bg} {...props}>
      <Container maxWidth={containerWidth}>
        <Flex
          minHeight="36rem"
          my={2}
          sx={{
            gap: 1,
            flexFlow: "row wrap",
          }}
        >
          <Flex
            flex={1}
            bg={titleBackground}
            alignItems="center"
            textAlign={orientation}
            {...titleBoxVariants[orientation]}
          >
            {title &&
              cloneElement(title, {
                sx: {
                  ...STYLING.headline,
                  ...title?.props?.sx,
                },
              })}
          </Flex>
          <Flex
            order={orientation === "left" ? -1 : 1}
            flex={1}
            sx={{
              padding: 2,
              gap: 2,
              flexFlow: "column",
              textAlign: "center",
            }}
          >
            <Box mt="auto" mx={3}>
              {typeof Quote === "function" ? <Quote /> : Quote}
            </Box>
            <Flex
              justifyContent="center"
              sx={{
                gap: 3,
              }}
            >
              {Picture(getSafeIndex(activeIndex - 2), 2)}
              {Picture(getSafeIndex(activeIndex - 1), 1)}
              {Picture(activeIndex)}
              {Picture(getSafeIndex(activeIndex + 1), 1)}
              {Picture(getSafeIndex(activeIndex + 2), 2)}
            </Flex>
            <Box mb={1}>
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
        </Flex>
      </Container>
    </SkewBox>
  )
}

export { Testimonials }
