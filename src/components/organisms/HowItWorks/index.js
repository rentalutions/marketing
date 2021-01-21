import * as React from "react"
import { Box, Container, Grid, Col } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { STYLING } from "config"
import { FadeIn } from "components/fadeIn"

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
          <FadeIn>
            <Text color="blue_500" mb="1rem">
              {eyebrow}
            </Text>
          </FadeIn>
        )}
        {title &&
          <FadeIn transition={{ delay: 0.5 }}>
            {React.cloneElement(title, {
              mb: "4rem",
              sx: { ...STYLING.headline, ...title.props?.sx },
            })}
          </FadeIn>
        }
        <FadeIn transition={{ delay: 0.7 }}>
          {sections.map((section, idx) => (
            <HowItWorksSection
              {...section}
              key={section.uid || idx}
              flip={alternate(idx)}
              mb={idx !== sections.length - 1 ? "6rem" : 0}
            />
          ))}
        </FadeIn>
      </Container>
    </Box>
  )
}

function HowItWorksSection({ copy, image = null, flip, mb }) {
  const copyColumn = ["span 12", flip ? "7 / span 6" : "1 / span 6"]
  const imageColumn = ["span 12", flip ? "1 / span 6" : "7 / span 6"]
  return (
    <Grid alignItems="center" gridAutoFlow="row dense" mb={mb}>
      <Col gridColumn={copyColumn}>{copy}</Col>
      <Col
        as="img"
        src={image.url}
        alt={image.alt}
        title={image.alt}
        gridColumn={imageColumn}
        maxWidth="100%"
      />
    </Grid>
  )
}

export { HowItWorks }
