import * as React from "react"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import Video from "components/elements/Video"
import { STYLING } from "config"

function HowItWorks({
  title,
  eyebrow,
  sections = [],
  alternate = (idx) => idx % 2 !== 0,
  containerWidth,
  ...props
}) {
  return (
    <Box {...props}>
      <Container {...(containerWidth && { maxWidth: containerWidth })}>
        {eyebrow && (
          <Text color="blue_500" mb="1rem">
            {eyebrow}
          </Text>
        )}
        {title &&
          React.cloneElement(title, {
            mb: "4rem",
            sx: { ...STYLING.headline, ...title.props?.sx },
          })}
        {sections.map((section, idx) => (
          <HowItWorksSection
            {...section}
            key={section.uid || idx}
            flip={alternate(idx)}
            mb={idx !== sections.length - 1 ? "6rem" : 0}
          />
        ))}
      </Container>
    </Box>
  )
}

function HowItWorksSection({
  copy,
  image = null,
  video = {},
  embed,
  flip,
  mb,
}) {
  const copyColumn = ["span 12", flip ? "7 / span 6" : "1 / span 6"]
  const imageColumn = ["span 12", flip ? "1 / span 6" : "7 / span 6"]
  return (
    <Grid alignItems="center" gridAutoFlow="row dense" mb={mb}>
      <Col gridColumn={copyColumn}>{copy}</Col>
      {image?.url && (
        <Col
          as="img"
          src={image.url}
          alt={image.alt}
          title={image.alt}
          gridColumn={imageColumn}
          maxWidth="100%"
        />
      )}
      {!!video?.url && (
        <Col width="100%" gridColumn={imageColumn} maxWidth="100%">
          <Video src={video.url} />
        </Col>
      )}
      {!!embed && (
        <Col gridColumn={imageColumn} maxWidth="100%">
          {embed}
        </Col>
      )}
    </Grid>
  )
}

export { HowItWorks }
