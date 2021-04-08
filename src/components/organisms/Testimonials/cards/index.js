import React, {
  cloneElement,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "react-feather"
import { useResize } from "@rent_avail/utils"
import { useInViewAnimation } from "utils/animation"
import { Container, Box, Card, Stack } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import SkewBox from "components/molecules/SkewBox"
import { STYLING } from "config"

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
  position: relative;
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
  gap: 1rem;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
`

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
    containerObserver.current?.disconnect()

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

    const last = childrenRef.current[childrenRef.current.length - 1]
    if (last) containerObserver.current.observe(last)

    return () => {
      containerObserver.current?.disconnect()
    }
  }, [containerRef, childrenRef])

  const scrollLeft = useCallback(() => {
    const leftClipped = childrenRef.current.find(
      ({ offsetLeft, offsetWidth }) =>
        offsetLeft + offsetWidth - scrollRef.current.scrollLeft >
        0 - containerRect.width
    )
    if (leftClipped) {
      scrollRef.current.scrollTo(leftClipped.offsetLeft, 0)
    }
  }, [containerRect, scrollRef, childrenRef])

  const scrollRight = useCallback(() => {
    const rightClipped = childrenRef.current.find(
      ({ offsetLeft, offsetWidth }) =>
        offsetLeft + offsetWidth - scrollRef.current.scrollLeft >
        containerRect.width
    )
    if (rightClipped) {
      scrollRef.current.scrollTo(rightClipped.offsetLeft, 0)
    }
  }, [containerRect, scrollRef, childrenRef])

  const [presets, animationIntersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <SkewBox as={motion.aside} {...animation?.container} bg={bg} {...props}>
      <Container ref={containerRef} maxWidth={containerWidth}>
        <Box
          as={motion.aside}
          {...animation?.item}
          ref={animationIntersectionView}
        >
          {title &&
            cloneElement(title, {
              sx: { ...STYLING.headline, ...title?.props?.sx },
              mb: "2rem",
            })}
          <CarouselBox
            ref={scrollRef}
            pb="1rem"
            mx={`-${scrollSpace}px`}
            px={`${scrollSpace}px`}
          >
            <TestimonialsStack
              wrapChildren
              direction={["row"]}
              sx={{ "& > *:last-child": { marginRight: 0 } }}
              forwardedAs={motion.div}
              {...animation?.container}
            >
              {testimonials?.map(
                ({ picture, author, titleAndLocation, quote: Quote }, idx) => (
                  <Testimonial
                    as={motion.div}
                    {...animation?.item}
                    key={`${author}-${titleAndLocation}`}
                    ref={(el) => {
                      childrenRef.current[idx] = el
                    }}
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
                        sx={{ borderRadius: "50%" }}
                      />
                    )}
                    <Box>
                      <h5>{author}</h5>
                      <Text>{titleAndLocation}</Text>
                    </Box>
                  </Testimonial>
                )
              )}
            </TestimonialsStack>
          </CarouselBox>
          {(mayScrollLeft || mayScrollRight) && (
            <ScrollControlsContainer>
              <ChevronLeft
                onClick={() => mayScrollLeft && scrollLeft()}
                className={
                  mayScrollLeft
                    ? "scrollControlEnabled"
                    : "scrollControlDisabled"
                }
              />
              <ChevronRight
                onClick={() => mayScrollRight && scrollRight()}
                className={
                  mayScrollRight
                    ? "scrollControlEnabled"
                    : "scrollControlDisabled"
                }
              />
            </ScrollControlsContainer>
          )}
        </Box>
      </Container>
    </SkewBox>
  )
}

export default TestimonialsCards
