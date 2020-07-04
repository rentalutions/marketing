import * as React from "react"
import styled from "styled-components"
import { Text, Heading } from "@rent_avail/typography"
import { Box, Container, Grid, Col } from "@rent_avail/layout"

// const NumberGrid = styled(Container)`
//   display: grid;
//   grid-template-columns: repeat(1fr, 3);
//   gap: 2rem;
// `

function BigNumbers({ numbers, ...props }) {
  return (
    <Box {...props}>
      <Container as={Grid}>
        {numbers.map(({ title, number }) => (
          <Col
            key={title}
            span={[12, 4]}
            alignSelf="center"
            justifySelf="center"
          >
            <Heading>{number}</Heading>
            <Text>{title}</Text>
          </Col>
        ))}
      </Container>
    </Box>
  )
}

function Testimonials({ quotes, ...props }) {
  return (
    <Box {...props}>
      <Container></Container>
    </Box>
  )
}

function SocialProof({ numbers, quotes, ...props }) {
  return (
    <Box
      {...props}
      backgroundImage={props.backgroundImage || "/social-proof-map.png"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <BigNumbers mb="4rem" />
      <Testimonials />
    </Box>
  )
}

export { BigNumbers, Testimonials, SocialProof }
