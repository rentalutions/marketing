import React, {
  cloneElement,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react"
import { Box, Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import SkewBox from "components/molecules/SkewBox"
import BoxedTitleSection from "components/molecules/BoxedTitleSection"
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
  const [currentInterval, setCurrentInterval] = useState(testimonialInterval)

  const [activeIndex, setActiveIndex] = useState(0)
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

  const Picture = memo(function Picture({ testimonialIndex, level = 0 }) {
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

  return (
    <SkewBox bg={bg} {...props}>
      <BoxedTitleSection
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
          sx={{
            minHeight: "36rem",
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
            <Picture
              testimonialIndex={getSafeIndex(activeIndex - 2)}
              level={2}
            />
            <Picture
              testimonialIndex={getSafeIndex(activeIndex - 1)}
              level={1}
            />
            <Picture testimonialIndex={activeIndex} />
            <Picture
              testimonialIndex={getSafeIndex(activeIndex + 1)}
              level={1}
            />
            <Picture
              testimonialIndex={getSafeIndex(activeIndex + 2)}
              level={2}
            />
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
      </BoxedTitleSection>
    </SkewBox>
  )
}

export { Testimonials }
