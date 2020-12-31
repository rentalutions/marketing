import React from "react"
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
      <Unsafe_CarouselItem onCurrent={() => console.log("I'm current 2")}>
        Hello Thing
      </Unsafe_CarouselItem>
      <Unsafe_CarouselItem onCurrent={() => console.log("I'm current 3")}>
        Hello Planet
      </Unsafe_CarouselItem>
      <Unsafe_CarouselItem onCurrent={() => console.log("I'm current 4")}>
        Hello Universe
      </Unsafe_CarouselItem>
    </Unsafe_CarouselContainer>
  )
}
