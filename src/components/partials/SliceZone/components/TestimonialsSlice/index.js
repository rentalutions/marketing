import React from "react"
import { TestimonialsV1, TestimonialsV2 } from "components/organisms/Testimonials"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"

const TestimonialsSlice = ({
  version = "v1",
  slice
}) => {
  const {
    primary: {
      title,
      background,
      color,
      testimonialBackground,
      testimonialColor,
      titleBackground,
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

  const Testimonials = (()=>{
    switch (version) {
      case "v2": return TestimonialsV2
      case "v1":
      default:
        return TestimonialsV1
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
      testimonialInterval={testimonialInterval}
      skew={skew}
    />
  )
}

export default TestimonialsSlice
