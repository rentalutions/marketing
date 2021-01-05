import React, { useState, useReducer, useEffect } from "react"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import {
  Unsafe_CarouselContainer,
  Unsafe_CarouselItem,
} from "./unsafe-carousel"

export default { title: "Components/Carousel" }

export function Default() {
  return (
    <Unsafe_CarouselContainer>
      <Unsafe_CarouselItem onCurrent={() => console.log("I'm current 1")}>
        Hello World
      </Unsafe_CarouselItem>
    </Unsafe_CarouselContainer>
  )
}

const wrap = (min, max, v) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

function reducer(state, action) {
  return {
    ...state,
    ...(typeof action === "function" ? action(state) : action),
  }
}

export function TwoColumnLayout() {
  const limit = 7
  const profiles = [
    "https://i.pravatar.cc/72?u=1",
    "https://i.pravatar.cc/72?u=2",
    "https://i.pravatar.cc/72?u=3",
    "https://i.pravatar.cc/72?u=4",
    "https://i.pravatar.cc/72?u=5",
    "https://i.pravatar.cc/72?u=6",
    "https://i.pravatar.cc/72?u=7",
    "https://i.pravatar.cc/72?u=8",
    "https://i.pravatar.cc/72?u=9",
    "https://i.pravatar.cc/72?u=10",
  ]
  const [{ page, direction }, setState] = useReducer(reducer, {
    page: 0,
    direction: 0,
  })
  const containerX = useMotionValue(0)
  const currentIdx = wrap(0, profiles.length, page)
  function addRight() {
    setState((state) => ({
      page: state.page + 1,
    }))
  }
  return (
    <Box sx={{ position: "relative", mt: "4rem" }}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "calc(50%)",
          bg: "blue_100",
          zIndex: -1,
          borderBottomRightRadius: "4rem",
        }}
      />
      <Container
        as={Grid}
        sx={{
          px: "2rem",
          minHeight: "75vh",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Col as="h2" span={[12, 12, 6]} sx={{ textAlign: "right", px: "4rem" }}>
          What Our Users Are Saying
        </Col>
        <Col span={[12, 12, 6]} sx={{ px: "4rem", textAlign: "center" }}>
          {/* Testimonial Area */}
          <Box as="h4" className="active-quote">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            quasi atque debitis quidem doloribus officia eligendi ratione
            exercitationem quo nisi.
          </Box>
          <Box
            className="user-profiles"
            as={motion.div}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: containerX }}
            sx={{
              mt: "2rem",
              minHeight: "4rem",
              position: "relative",
            }}
          >
            {profiles.map((src, idx) => {
              const motionIdx = useMotionValue(idx)
              const middle = Math.round((limit - 1) / 2)
              const inputRange = [0, middle, limit - 1]
              const scale = useTransform(motionIdx, inputRange, [0.5, 1, 0.5])
              const opacity = useTransform(motionIdx, inputRange, [0, 1, 0])
              const x = useTransform(motionIdx, inputRange, [
                "-20rem",
                "0rem",
                "20rem",
              ])
              useEffect(() => {
                containerX.onChange((value) => motionIdx.set(idx + value / 10))
              }, [])
              return (
                <Box
                  key={`${idx}-profile`}
                  as={motion.img}
                  src={src}
                  style={{ opacity, scale, x }}
                  onClick={addRight}
                  sx={{
                    borderRadius: "50%",
                    flex: "0 0 auto",
                    position: "absolute",
                    width: "4rem",
                    height: "4rem",
                    left: "calc(50% - 2rem)",
                  }}
                />
              )
            })}
          </Box>
        </Col>
      </Container>
    </Box>
  )
}
