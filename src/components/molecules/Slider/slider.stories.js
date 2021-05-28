import React, { useRef } from "react"
import { Box, Card, Container } from "@rent_avail/layout"
import { CONTAINER_WIDTHS } from "config"
import { Slider } from "./index"

export default { title: "Components/Slider" }

function CardContent() {
  return (
    <React.Fragment>
      <Box as="h3">lorem ipsum dolor sit amet consectetur adipiscing elit</Box>
      <h4>Jhon Smith</h4>
    </React.Fragment>
  )
}

export function Default() {
  const containerRef = useRef()
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <Container ref={containerRef} maxWidth={CONTAINER_WIDTHS}>
        <Slider containerRef={containerRef}>
          <Card key="card-1" bg="ui_100" color="blue_500">
            <CardContent />
          </Card>
          <Card key="card-2" bg="ui_300" color="blue_700">
            <CardContent />
          </Card>
          <Card key="card-3" bg="ui_100" color="blue_500">
            <CardContent />
          </Card>
          <Card key="card-4" bg="ui_300" color="blue_700">
            <CardContent />
          </Card>
          <Card key="card-5" bg="ui_100" color="blue_500">
            <CardContent />
          </Card>
          <Card key="card-6" bg="ui_300" color="blue_700">
            <CardContent />
          </Card>
        </Slider>
      </Container>
    </Box>
  )
}

export function WithTwoCards() {
  const containerRef = useRef()
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <Container ref={containerRef} maxWidth={CONTAINER_WIDTHS}>
        <Slider containerRef={containerRef}>
          <Card key="card-1">
            <Box as="h2">
              lorem ipsum dolor sit amet consectetur adipiscing elit
            </Box>
            <h3>Jhon Smith</h3>
          </Card>
          <Card key="card-2">
            <Box as="h2">
              lorem ipsum dolor sit amet consectetur adipiscing elit
            </Box>
            <h3>Jhon Smith</h3>
          </Card>
        </Slider>
      </Container>
    </Box>
  )
}

export function WithTwelveCards() {
  const containerRef = useRef()
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <Container ref={containerRef} maxWidth={CONTAINER_WIDTHS}>
        <Slider containerRef={containerRef}>
          <Card
            key="card-1"
            bg="blue_300"
            color="ui_100"
            sx={{ textAlign: "right" }}
          >
            <CardContent />
          </Card>
          <Card key="card-2" bg="gold_300" color="blue_500">
            <CardContent />
          </Card>
          <Card
            key="card-3"
            bg="blue_300"
            color="ui_100"
            sx={{ textAlign: "right" }}
          >
            <CardContent />
          </Card>
          <Card key="card-4" bg="gold_300" color="blue_500">
            <CardContent />
          </Card>
          <Card
            key="card-5"
            bg="blue_300"
            color="ui_100"
            sx={{ textAlign: "right" }}
          >
            <CardContent />
          </Card>
          <Card key="card-6" bg="gold_300" color="blue_500">
            <CardContent />
          </Card>
          <Card
            key="card-7"
            bg="blue_300"
            color="ui_100"
            sx={{ textAlign: "right" }}
          >
            <CardContent />
          </Card>
          <Card key="card-8" bg="gold_300" color="blue_500">
            <CardContent />
          </Card>
          <Card
            key="card-9"
            bg="blue_300"
            color="ui_100"
            sx={{ textAlign: "right" }}
          >
            <CardContent />
          </Card>
          <Card key="card-10" bg="gold_300" color="blue_500">
            <CardContent />
          </Card>
          <Card
            key="card-11"
            bg="blue_300"
            color="ui_100"
            sx={{ textAlign: "right" }}
          >
            <CardContent />
          </Card>
          <Card key="card-12" bg="gold_300" color="blue_500">
            <CardContent />
          </Card>
        </Slider>
      </Container>
    </Box>
  )
}
