import * as React from "react"
import { Container, Grid, Col, Box, Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"
import Link from "next/link"

function PitchCards({ span, sections, title, description, eyebrow, ...props }) {
  const cardSpan =
    span || (sections.length < 4 ? [12, 12 / sections.length] : [12, 6])
  const headingContent = title || description || eyebrow
  return (
    <Container {...props} as={Grid} gap={["3rem 0", "3rem"]}>
      {headingContent && (
        <Col span={12} mb="3rem">
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
  icon = null,
  link,
  ...props
}) {
  return (
    <Col {...props} display="flex" flexDirection="column">
      {icon && (
        <Box
          as="img"
          src={icon.url}
          alt={icon.alt}
          title={icon.alt}
          width="10rem"
        />
      )}
      {title && <Box mb="2rem">{title}</Box>}
      {description && (
        <Box flex={link && link.button ? "1 1 auto" : "initial"}>
          {description}
        </Box>
      )}
      {link && (
        <Flex
          mt="1.5rem"
          justifyContent={link.button ? "center" : "flex-start"}
        >
          <Link href={link.url} passHref>
            {link.button ? (
              <Button as="a" {...(link.target && { target: link.target })}>
                {link.text}
              </Button>
            ) : (
              <Text
                as="a"
                {...(link.target && { target: link.target })}
                color="blue_700"
              >
                {link.text}
              </Text>
            )}
          </Link>
        </Flex>
      )}
    </Col>
  )
}

export { PitchCards }
