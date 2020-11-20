import * as React from "react"
import { Container, Grid, Col, Box } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import Link from "next/link"

function PitchCards({ span, sections, title, description, eyebrow, ...props }) {
  const cardSpan =
    span || (sections.length < 4 ? [12, 12 / sections.length] : [12, 6])
  const headingContent = title || description || eyebrow
  return (
    <Container {...props} as={Grid} gap={["3rem 0", "3rem"]}>
      {headingContent && (
        <Col span={12}>
          {eyebrow && (
            <Text fontSize="small" mb="1rem" color="blue_300">
              {eyebrow}
            </Text>
          )}
          {title && title}
          {description && description}
        </Col>
      )}
      {/* eslint-disable-next-line no-shadow */}
      {sections.map(({ title, key, icon, description, link }) => (
        <PitchCard
          key={key}
          title={title}
          icon={icon}
          description={description}
          link={link}
          span={cardSpan}
        />
      ))}
    </Container>
  )
}

function PitchCard({
  title = "",
  description = "",
  icon = "",
  link,
  ...props
}) {
  return (
    <Col {...props}>
      {icon && <Box as="img" src={icon} width="10rem" />}
      {title && title}
      {description && description}
      {link && (
        <Box mt="1.5rem">
          <Link href={link.url} passHref>
            <Text as="a" color="blue_700">
              {link.text}
            </Text>
          </Link>
        </Box>
      )}
    </Col>
  )
}

export { PitchCards }
