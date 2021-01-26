import React, { cloneElement } from "react"
import { useInViewAnimation } from "components/@rent_avail/utils"
import { Box, Col, Container, Grid } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { PitchCard } from "components/molecules/PitchCard"
import { STYLING } from "config"
import { motion } from "framer-motion"

function PitchCards({ span, sections, title, description, eyebrow, animationPreset = "fadeIn", ...props }) {
  const cardSpan =
    span || (sections.length < 4 ? [12, 12 / sections.length] : [12, 6])
  const headingContent = title || description || eyebrow
  const [ presets, intersectionView ] = useInViewAnimation({ threshold: 0.1 })
  const animation = presets[animationPreset]
  return (
    <Container {...props} as={Grid} gap={["3rem 0", "3rem"]} ref={intersectionView}>
      {headingContent && (
        <Col span={12} mb="3rem">
          {eyebrow && (
            <motion.aside {...animation}>
              <Text fontSize="small" mb="1rem" color="blue_300">
                {eyebrow}
              </Text>
            </motion.aside>
          )}
          {title &&
            <motion.aside {...animation}>
              {cloneElement(title, {
                sx: { ...STYLING.headline, ...title.props?.sx },
              })}
            </motion.aside>
          }
          {description && 
            <motion.aside {...animation}>
              {description}
            </motion.aside>
          }
        </Col>
      )}
      {/* eslint-disable-next-line no-shadow */}
      {sections.map(({ key, ...props }, idx) => (
        <Col key={key || idx} span={cardSpan}>
          <motion.aside
            {...animation}
            transition={{
              ...animation.transition,
              delay: 0.75 + (idx * 0.25)
            }} 
          >
            <PitchCard {...props} />
          </motion.aside>
        </Col>
      ))}
    </Container>
  )
}

export { PitchCards }
