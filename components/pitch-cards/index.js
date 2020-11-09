import * as React from "react"
import styled from "styled-components"
import { Container, Grid, Col, Box } from "@rent_avail/layout"
import { Heading, Text } from "@rent_avail/typography"

function PitchCards({ sections, title, description, eyebrow, ...props }) {
  const span = sections.length < 4 ? [12, 12 / sections.length] : [12, 6]
  const headingContent = title || description || eyebrow
  return (
    <Container {...props} as={Grid} gap="3rem">
      {headingContent && (
        <Col span={12}>
          {eyebrow && (
            <Text fontSize="small" mb="1rem" color="blue_300">
              {eyebrow}
            </Text>
          )}
          {title && (
            <Heading as="h2" mb="1rem">
              {title}
            </Heading>
          )}
          {description && description}
        </Col>
      )}
      {sections.map(({ title, icon, description }) => (
        <PitchCard
          key={title}
          title={title}
          icon={icon}
          description={description}
          span={span}
        />
      ))}
    </Container>
  )
}

function PitchCard({ title = "", description = "", icon = "", ...props }) {
  return (
    <Col {...props}>
      {icon && <Box as="img" src={icon} width="6rem" />}
      <Heading as="h5" mb="2rem">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Col>
  )
}

export { PitchCards }
