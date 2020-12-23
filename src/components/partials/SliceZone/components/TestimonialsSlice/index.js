import React from "react"
import { Testimonials } from "components/organisms/Testimonials"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"

const TestimonialsSlice = ({ slice }) => {
  const {
    primary: {
      title,
      background,
      color,
      testimonialBackground,
      testimonialColor,
    },
  } = slice

  const testimonials = slice.items.map(
    ({ picture, author, titleAndLocation, quote }) => ({
      picture,
      author,
      titleAndLocation,
      quote: <RichText render={quote} />,
    })
  )

  return (
    <Testimonials
      title={<RichText render={title} heading />}
      testimonials={testimonials}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      testimonialBg={testimonialBackground}
      testimonialColor={testimonialColor}
    />
  )
}

export default TestimonialsSlice
