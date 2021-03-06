import React, { cloneElement, useRef } from "react"
import { m as motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Container, Box } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import SkewBox from "components/molecules/SkewBox"
import Card from "components/elements/Card"
import Slider from "components/molecules/Slider"
import { STYLING } from "config"

function TestimonialsCards({
  bg,
  title,
  testimonials,
  testimonialBg,
  testimonialColor,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const containerRef = useRef()

  const [presets, animationIntersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <SkewBox as={motion.aside} {...animation?.container} bg={bg} {...props}>
      <Container ref={containerRef} maxWidth={containerWidth}>
        <Box ref={animationIntersectionView}>
          {title &&
            cloneElement(title, {
              sx: { ...STYLING.headline, ...title?.props?.sx },
              mb: "2rem",
              as: motion.aside,
              ...animation?.item,
            })}
          <Slider
            as={motion.div}
            {...animation?.item}
            containerRef={containerRef}
          >
            {testimonials?.map(
              ({ picture, author, titleAndLocation, quote: Quote }) => (
                <Card
                  key={`${author}-${titleAndLocation}`}
                  sx={{
                    bg: testimonialBg,
                    color: testimonialColor,
                  }}
                >
                  <Box flex={1}>
                    {typeof Quote === "function" ? <Quote /> : Quote}
                  </Box>
                  {!!picture && (
                    <Box width="4rem" sx={{ "& img": { borderRadius: "50%" } }}>
                      {picture}
                    </Box>
                  )}
                  <Box>
                    <h5>{author}</h5>
                    <Text>{titleAndLocation}</Text>
                  </Box>
                </Card>
              )
            )}
          </Slider>
        </Box>
      </Container>
    </SkewBox>
  )
}

export default TestimonialsCards
