import React, {
  useRef,
  useEffect,
  forwardRef,
  useMemo,
  useContext,
} from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { Container, Box } from "@rent_avail/layout"
import { mergeRefs, noop, wrapEvent, useResize } from "@rent_avail/utils"
import {
  CarouselContext,
  Unsafe_useCarouselContainer,
} from "./unsafe-use-carousel"

export const Unsafe_CarouselContainer = forwardRef(function Unsafe_Carousel(
  { controls = true, ...props },
  ref
) {
  const { carouselProps, ...htmlProps } = Unsafe_useCarouselContainer({
    ...props,
    ref,
  })
  const ctx = useMemo(() => carouselProps, [carouselProps])
  return (
    <CarouselContext.Provider value={ctx}>
      <Box
        {...htmlProps}
        sx={{
          position: "relative",
          display: "flex",
          overflowX: "auto",
          pl: "max(50vw - 42rem, 2rem)",
          gap: "2rem",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      />
      {controls && <Unsafe_CarouselControls />}
    </CarouselContext.Provider>
  )
})

export const Unsafe_CarouselControls = forwardRef(
  function Unsafe_CarouselControls(props, ref) {
    const { carouselItems, container } = useContext(CarouselContext)
    const containerRect = useResize(container)
    function scrollRight() {
      const rightClipped = carouselItems.find(
        ({ offsetWidth, offsetLeft }) =>
          offsetLeft + offsetWidth - container.current.scrollLeft >
          containerRect.width
      )
      if (rightClipped) {
        rightClipped.scrollIntoView()
        rightClipped.focus()
      }
    }
    function scrollLeft() {
      const leftClipped = carouselItems.find(
        ({ offsetLeft }) => offsetLeft - container.current.scrollLeft < 0
      )
      if (leftClipped) {
        leftClipped.scrollIntoView()
        leftClipped.focus()
      }
    }
    return (
      <Container
        {...props}
        ref={ref}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "2rem",
          mt: "2rem",
        }}
      >
        <ChevronLeft onClick={scrollLeft} />
        <ChevronRight onClick={scrollRight} />
      </Container>
    )
  }
)

export const Unsafe_CarouselItem = forwardRef(function Unsafe_CarouselItem(
  { onFocus = noop, onCurrent = noop, ...props },
  ref
) {
  const innerRef = useRef(null)
  const {
    register,
    deregister,
    carouselItems,
    currentIdx,
    setState,
  } = useContext(CarouselContext)
  function handleFocus(evt) {
    const newIdx = carouselItems.findIndex((i) => i === evt.target)
    setState({ currentIdx: newIdx })
    onCurrent(evt)
  }
  useEffect(() => {
    const exists = carouselItems.find((item) => item === innerRef.current)
    if (!exists) {
      register(innerRef.current)
    }
    if (innerRef.current === carouselItems[currentIdx]) innerRef.current.focus()
    return () => innerRef.current ?? deregister(innerRef.current)
  }, [innerRef.current, currentIdx])
  return (
    <Box
      {...props}
      ref={mergeRefs(ref, innerRef)}
      onFocus={wrapEvent(onFocus, handleFocus)}
      tabIndex="0"
      sx={{
        flex: "0 0 auto",
      }}
    />
  )
})
