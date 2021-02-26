import React from "react"
import { TestimonialsCarousel } from "components/organisms/Testimonials"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"

const TestimonialsCarouselSlice = ({ slice }) => {
  const {
    primary: {
      title,
      background,
      color,
      testimonialBackground,
      testimonialColor,
      titleBackground,
      orientation,
      testimonialInterval,
      skew,
    },
  } = slice

  const testimonials = slice.items.map(
    ({ picture, author, titleAndLocation, quote, additionalInfo }) => {
      return {
        picture,
        author,
        titleAndLocation,
        additionalInfo,
        quote: <RichText render={quote} />,
      }
    }
  )

  return (
    <TestimonialsCarousel
      title={<RichText render={title} heading />}
      testimonials={testimonials}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      testimonialBg={testimonialBackground}
      testimonialColor={testimonialColor}
      titleBackground={titleBackground}
      orientation={orientation}
      testimonialInterval={testimonialInterval}
      skew={skew}
      pb="6rem"
    />
  )
}

export default TestimonialsCarouselSlice
