import React, { cloneElement } from "react"
import { useInViewAnimation } from "utils/animation"
import { Col, Container, Grid } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { PitchCard } from "components/molecules/PitchCard"
import { STYLING } from "config"
import { m as motion } from "framer-motion"

function PitchCards({
  span,
  sections,
  title,
  description,
  eyebrow,
  animationPreset = "fadeIn",
  ...props
}) {
  const cardSpan =
    span || (sections.length < 4 ? [12, 12 / sections.length] : [12, 6])
  const headingContent = title || description || eyebrow
  const [presets, intersectionView] = useInViewAnimation({ threshold: 0.05 })
  const animation = presets[animationPreset]
  return (
    <motion.aside {...animation?.container}>
      <Container
        {...props}
        as={Grid}
        gap={["3rem 0", "3rem"]}
        ref={intersectionView}
      >
        {headingContent && (
          <Col span={12} mb="3rem">
            {eyebrow && (
              <Text
                as={motion.aside}
                {...animation?.item}
                fontSize="small"
                mb="1rem"
                color="blue_300"
              >
                {eyebrow}
              </Text>
            )}
            {title && (
              <motion.aside {...animation?.item}>
                {cloneElement(title, {
                  sx: { ...STYLING.headline, ...title.props?.sx },
                })}
              </motion.aside>
            )}
            {description && (
              <motion.aside {...animation?.item}>{description}</motion.aside>
            )}
          </Col>
        )}
        {/* eslint-disable-next-line no-shadow */}
        {sections.map(({ key, ...props }, idx) => (
          <Col key={key || idx} span={cardSpan}>
            <PitchCard {...props} animationPreset={animationPreset} />
          </Col>
        ))}
      </Container>
    </motion.aside>
  )
}

export { PitchCards }
