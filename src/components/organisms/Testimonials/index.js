import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"

import { useResize } from "@rent_avail/utils"
import { Container, Box, Card, Stack } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import { ChevronLeft, ChevronRight } from "react-feather"

import SkewBox from "components/molecules/SkewBox"

const CarouselBox = styled(Box)`
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`
const TestimonialsStack = styled(Stack)`
  display: inline-flex;
`
const ScrollControlsContainer = styled(Box)`
  text-align: right;
  > * {
    margin: 1rem;
    opacity: 0.9;
    &.scrollControlEnabled:hover {
      cursor: pointer;
      opacity: 1;
    }
    &.scrollControlDisabled {
      opacity: 0.7;
    }
  }
`
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

const containerObserverCb = (setLeftClipped, setRightClipped) => (entries) => {
  entries.forEach((entry) => {
    const isVisible = entry.isIntersecting
    const { previousSibling, nextSibling } = entry.target.parentElement
    if (previousSibling === null) setLeftClipped(!isVisible)
    if (nextSibling === null) setRightClipped(!isVisible)
  })
}

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

  const [scrollSpace, setScrollSpace] = useState(0)
  const containerRect = useResize(containerRef)

  const [leftClipped, setLeftClipped] = useState(false)
  const [rightClipped, setRightClipped] = useState(false)

  const [containerObserver, setContainerObserver] = useState()

  const scrollRef = useRef()
  function scroll(multiplier = 1) {
    scrollRef.current.scrollBy(multiplier * containerRef.current.offsetWidth, 0)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container || !getComputedStyle) return
    const { marginLeft, paddingLeft } = getComputedStyle(container)
    setScrollSpace(parseInt(marginLeft, 10) + parseInt(paddingLeft, 10))
  }, [containerRect])

  useEffect(() => {
    if (containerObserver) containerObserver.disconnect()

    const cb = containerObserverCb(setLeftClipped, setRightClipped)
    const options = {
      root: containerRef.current,
      rootMargin: `0px ${scrollSpace}px`,
      threshold: 1.0,
    }
    setContainerObserver(new IntersectionObserver(cb, options))
  }, [scrollSpace, containerRef.current])

  return (
    <SkewBox bg={bg} {...props}>
      <Container ref={containerRef} maxWidth={containerWidth}>
        {title && (
          <Heading as="h3" mb="1rem">
            {title}
          </Heading>
        )}
        <CarouselBox
          ref={scrollRef}
          mb="1rem"
          mx={`-${scrollSpace}px`}
          px={`${scrollSpace}px`}
        >
          <TestimonialsStack
            wrapChildren
            direction={["row"]}
            sx={{ "& > *:last-child": { marginRight: 0 } }}
          >
            {testimonials.map(
              ({ picture, author, titleAndLocation, quote: Quote }, idx) => (
                <Testimonial
                  ref={(ref) => {
                    const isFirstOrLast =
                      idx === 0 || idx === testimonials.length - 1
                    if (ref && isFirstOrLast)
                      containerObserver?.observe(ref)
                  }}
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
          </TestimonialsStack>
        </CarouselBox>
        <ScrollControlsContainer>
          <ChevronLeft
            onClick={() => leftClipped && scroll(-1)}
            className={
              leftClipped ? "scrollControlEnabled" : "scrollControlDisabled"
            }
          />
          <ChevronRight
            onClick={() => rightClipped && scroll(1)}
            className={
              rightClipped ? "scrollControlEnabled" : "scrollControlDisabled"
            }
          />
        </ScrollControlsContainer>
      </Container>
    </SkewBox>
  )
}

export { Testimonials }
