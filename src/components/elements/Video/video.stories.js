import React from "react"
import { Container, Box } from "@rent_avail/layout"
import Video from "./index"

export default {
  title: "Components/Video",
}

export function Default() {
  return (
    <Box py="10rem">
      <Container>
        <Video src="/media/sample-video.mp4" />
      </Container>
    </Box>
  )
}
