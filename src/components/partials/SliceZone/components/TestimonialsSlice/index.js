import React from "react"
import {
  TestimonialsCards,
  TestimonialsCarousel,
} from "components/organisms/Testimonials"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"

const TestimonialsSlice = ({ version = "cards", slice }) => {
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
    ({ picture, author, titleAndLocation, quote, aditionalInfo }) => ({
      picture,
      author,
      titleAndLocation,
      aditionalInfo,
      quote: <RichText render={quote} />,
    })
  )

  const Testimonials = (() => {
    switch (version) {
      case "carousel":
        return TestimonialsCarousel
      case "cards":
      default:
        return TestimonialsCards
    }
  })()

  return (
    <Testimonials
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
    />
  )
}

export default TestimonialsSlice
