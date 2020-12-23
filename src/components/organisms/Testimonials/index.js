import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { useResize } from "@rent_avail/utils"
import { Container, Box, Card } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import Carousel from "components/molecules/Carousel"
import SkewBox from "components/molecules/SkewBox"

const Testimonial = styled(Card)`
  flex: 1 0 auto;
  width: 26rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
`

function Testimonials({
  bg,
  title,
  testimonials,
  testimonialBg,
  testimonialColor,
  containerWidth,
  ...props
}) {
  const containerRef = useRef()
  const containerRect = useResize(containerRef)
  const [scrollSpace, setScrollSpace] = useState()

  useEffect(() => {
    const container = containerRef.current
    if (!container || !getComputedStyle) return
    const {
      marginLeft,
      paddingLeft,
      marginRight,
      paddingRight,
    } = getComputedStyle(container)
    const leftSpace = parseInt(marginLeft, 10) + parseInt(paddingLeft, 10)
    const rightSpace = parseInt(marginRight, 10) + parseInt(paddingRight, 10)
    setScrollSpace({
      left: `${leftSpace}px`,
      right: `${rightSpace}px`,
    })
  }, [containerRect])

  return (
    <SkewBox bg={bg} {...props}>
      <Container ref={containerRef} maxWidth={containerWidth}>
        {title && (
          <Heading as="h3" mb="1rem">
            {title}
          </Heading>
        )}
        <Carousel scrollSpace={scrollSpace}>
          {testimonials.map(
            ({ picture, author, titleAndLocation, quote: Quote }) => (
              <Testimonial
                key={`${author}-${titleAndLocation}`}
                bg={testimonialBg}
                color={testimonialColor}
              >
                <Box flex={1}>
                  {typeof Quote === "function" ? <Quote /> : Quote}
                </Box>
                {picture && picture.url && (
                  <Box
                    as="img"
                    src={picture.url}
                    alt={picture.alt}
                    title={picture.alt}
                    width="4rem"
                  />
                )}
                <h5>{author}</h5>
                <span>{titleAndLocation}</span>
              </Testimonial>
            )
          )}
        </Carousel>
      </Container>
    </SkewBox>
  )
}

export { Testimonials }
