import React, { useRef, useState, useEffect, cloneElement } from "react"
import styled from "styled-components"
import { ChevronLeft, ChevronRight } from "react-feather"
import { Box, Stack } from "@rent_avail/layout"

const CarouselBox = styled(Box)`
  overflow: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  margin-left: ${({ scrollSpace }) =>
    scrollSpace ? `-${scrollSpace.left}` : "unset"};
  margin-right: ${({ scrollSpace }) =>
    scrollSpace ? `-${scrollSpace.right}` : "unset"};
  padding-left: ${({ scrollSpace }) =>
    scrollSpace ? scrollSpace.left : "unset"};
  padding-right: ${({ scrollSpace }) =>
    scrollSpace ? scrollSpace.right : "unset"};
`
const CarouselStack = styled(Stack)`
  display: inline-flex;
`
const ScrollControlsContainer = styled(Box)`
  height: 4rem;
  text-align: right;
  > * {
    font-size: 2rem;
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

function Carousel({ scrollSpace, children }) {
  const carouselRef = useRef()
  const refs = useRef([])

  const [currentIdx, setCurrentIdx] = useState(null)
  const [firstVisibleIdx, setFirstVisibleIdx] = useState(null)
  const [lastVisibleIdx, setLastVisibleIdx] = useState(null)

  const [fitsAllItems, _setFitsAllItems] = useState(null)
  function clearFitsAllItems() {
    _setFitsAllItems(null)
  }
  function setFitsAllItems(value) {
    if (fitsAllItems === null) _setFitsAllItems(value)
  }

  function calcVisibilityIndexes() {
    const windowWidth = window?.innerWidth || 0
    const { scrollLeft } = carouselRef?.current || 0
    setFirstVisibleIdx(0)
    for (let refIndex = 0; refIndex < refs.current.length; refIndex++) {
      const { offsetLeft, offsetWidth } = refs.current[refIndex] || {}
      const offsetRight = offsetLeft + offsetWidth
      if (offsetLeft < scrollLeft) setFirstVisibleIdx(refIndex + 1)
      if (offsetRight > windowWidth + scrollLeft) {
        setLastVisibleIdx(refIndex - 1)
        setFitsAllItems(false)
        return
      }
    }
    setLastVisibleIdx(refs.current.length - 1)
    setFitsAllItems(true)
  }

  function scrollTo(index) {
    const carousel = carouselRef.current
    const item = refs.current[index]
    if (carousel && item) {
      setCurrentIdx(index)
      const { offsetLeft, offsetWidth } = item
      const offsetCenter = offsetLeft + offsetWidth / 2
      const scrollLeft = offsetCenter - carousel.offsetWidth / 2
      carousel.scrollTo(scrollLeft, 0)
    }
  }

  useEffect(() => {
    calcVisibilityIndexes()
  }, [])

  useEffect(() => {
    scrollTo(0)
    clearFitsAllItems()
    calcVisibilityIndexes()
  }, [children])

  useEffect(() => {
    if (currentIdx < firstVisibleIdx) {
      setCurrentIdx(firstVisibleIdx)
    }
    if (currentIdx > lastVisibleIdx) {
      setCurrentIdx(lastVisibleIdx)
    }
  }, [firstVisibleIdx, lastVisibleIdx])

  const mayScrollBackward = firstVisibleIdx > 0
  const mayScrollForward = lastVisibleIdx < refs.current.length - 1

  function onClickPrevious(evt) {
    evt.preventDefault()
    if (mayScrollBackward) scrollTo(firstVisibleIdx - 1)
  }
  function onClickNext(evt) {
    evt.preventDefault()
    if (mayScrollForward) scrollTo(lastVisibleIdx + 1)
  }

  return (
    <React.Fragment>
      <CarouselBox
        ref={carouselRef}
        onScroll={calcVisibilityIndexes}
        scrollSpace={scrollSpace}
      >
        <CarouselStack
          wrapChildren
          direction={["row"]}
          sx={{ "& > *:last-child": { marginRight: 0 } }}
        >
          {children.map((childElement, idx) =>
            cloneElement(childElement, {
              ref: (el) => {
                refs.current[idx] = el
              },
            })
          )}
        </CarouselStack>
      </CarouselBox>
      <ScrollControlsContainer>
        {!fitsAllItems && (
          <React.Fragment>
            <ChevronLeft
              onClick={onClickPrevious}
              className={
                mayScrollBackward
                  ? "scrollControlEnabled"
                  : "scrollControlDisabled"
              }
            />
            <ChevronRight
              onClick={onClickNext}
              className={
                mayScrollForward
                  ? "scrollControlEnabled"
                  : "scrollControlDisabled"
              }
            />
          </React.Fragment>
        )}
      </ScrollControlsContainer>
    </React.Fragment>
  )
}

export default Carousel
