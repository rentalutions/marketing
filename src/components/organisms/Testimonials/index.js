import React, { useCallback, useEffect, useState, useRef } from "react"
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
      opacity: 0.3;
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
  const scrollRef = useRef()
  const childrenRef = useRef([])
  const containerObserver = useRef()

  const containerRect = useResize(containerRef)

  const [scrollSpace, setScrollSpace] = useState(0)
  const [mayScrollLeft, setMayScrollLeft] = useState(false)
  const [mayScrollRight, setMayScrollRight] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !getComputedStyle) return
    const { marginLeft, paddingLeft } = getComputedStyle(container)
    setScrollSpace(parseInt(marginLeft, 10) + parseInt(paddingLeft, 10))
  }, [containerRect])

  useEffect(() => {
    if (containerObserver.current) containerObserver.current.disconnect()

    function observerCb(entries) {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting
        const { previousSibling, nextSibling } = entry.target.parentElement
        if (previousSibling === null) setMayScrollLeft(!isVisible)
        if (nextSibling === null) setMayScrollRight(!isVisible)
      })
    }
    const observerOptions = {
      root: containerRef.current,
      threshold: 1.0,
    }
    containerObserver.current = new IntersectionObserver(
      observerCb,
      observerOptions
    )

    const first = childrenRef.current[0]
    if (first) containerObserver.current.observe(first)

    const last = childrenRef.current.pop()
    if (last) containerObserver.current.observe(last)
  }, [containerRef.current, childrenRef.current.length])

  const scrollLeft = useCallback(() => {
    const leftClipped = childrenRef.current
      .slice()
      .reverse()
      .find(({ offsetLeft }) => offsetLeft - scrollRef.current.scrollLeft < 0)
    if (leftClipped) {
      scrollRef.current.scrollTo(scrollSpace - leftClipped.offsetLeft, 0)
    }
  }, [scrollSpace, scrollRef.current, childrenRef.current.length])

  const scrollRight = useCallback(() => {
    const rightClipped = childrenRef.current.find(
      ({ offsetLeft, offsetWidth }) =>
        offsetLeft + offsetWidth - scrollRef.current.scrollLeft >
        containerRect.width
    )
    if (rightClipped) {
      scrollRef.current.scrollTo(rightClipped.offsetLeft, 0)
    }
  }, [scrollRef.current, childrenRef.current.length])

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
                  ref={(el) => {
                    childrenRef.current[idx] = el
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
            onClick={() => mayScrollLeft && scrollLeft()}
            className={
              mayScrollLeft ? "scrollControlEnabled" : "scrollControlDisabled"
            }
          />
          <ChevronRight
            onClick={() => mayScrollRight && scrollRight()}
            className={
              mayScrollRight ? "scrollControlEnabled" : "scrollControlDisabled"
            }
          />
        </ScrollControlsContainer>
      </Container>
    </SkewBox>
  )
}

export { Testimonials }
