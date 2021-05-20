import React from "react"
import { TestimonialsCards } from "components/organisms/Testimonials"
import { CONTAINER_WIDTHS } from "config"
import Image from "next/image"
import RichText from "../RichText"

const TestimonialsCardsSlice = ({ slice }) => {
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
    ({ picture, author, titleAndLocation, quote }) => ({
      picture: picture?.url && (
        <Image
          src={picture.url}
          width={picture.dimensions.width}
          height={picture.dimensions.height}
          alt={picture.alt}
          title={picture.title}
        />
      ),
      author,
      titleAndLocation,
      quote: <RichText render={quote} />,
    })
  )

  return (
    <TestimonialsCards
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

export default TestimonialsCardsSlice
