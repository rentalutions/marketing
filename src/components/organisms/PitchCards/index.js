import * as React from "react"
import { Col, Container, Grid } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { PitchCard } from "components/molecules/PitchCard"
import { STYLING } from "config"
import { FadeIn } from "components/fadeIn"

function PitchCards({ span, sections, title, description, eyebrow, ...props }) {
  const cardSpan =
    span || (sections.length < 4 ? [12, 12 / sections.length] : [12, 6])
  const headingContent = title || description || eyebrow
  return (
    <Container {...props} as={Grid} gap={["3rem 0", "3rem"]}>
      {headingContent && (
        <Col span={12} mb="3rem">
          {eyebrow && (
            <FadeIn>
              <Text fontSize="small" mb="1rem" color="blue_300">
                {eyebrow}
              </Text>
            </FadeIn>
          )}
          {title &&
            <FadeIn transition={{ delay: 0.5 }}>
              {React.cloneElement(title, {
                sx: { ...STYLING.headline, ...title.props?.sx },
              })}
            </FadeIn>
          }
          {description && 
            <FadeIn transition={{ delay: 0.7 }}>
              {description}
            </FadeIn>
          }
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

export { PitchCards }
