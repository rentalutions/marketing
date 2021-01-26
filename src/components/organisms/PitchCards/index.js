import React, { cloneElement } from "react"
import { useAnimateIntersection } from "@rent_avail/utils"
import { Box, Col, Container, Grid } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { PitchCard } from "components/molecules/PitchCard"
import { STYLING } from "config"
import { motion } from "framer-motion"

function PitchCards({ span, sections, title, description, eyebrow, ...props }) {
  const cardSpan =
    span || (sections.length < 4 ? [12, 12 / sections.length] : [12, 6])
  const headingContent = title || description || eyebrow
  const [ { fadeIn }, target ] = useAnimateIntersection({ threshold: 0.3 })
  return (
    <Container {...props} as={Grid} gap={["3rem 0", "3rem"]} ref={target}>
      {headingContent && (
        <Col span={12} mb="3rem">
          {eyebrow && (
            <motion.aside {...fadeIn}>
              <Text fontSize="small" mb="1rem" color="blue_300">
                {eyebrow}
              </Text>
            </motion.aside>
          )}
          {title &&
            <motion.aside {...fadeIn}>
              {cloneElement(title, {
                sx: { ...STYLING.headline, ...title.props?.sx },
              })}
            </motion.aside>
          }
          {description && 
            <motion.aside {...fadeIn}>
              {description}
            </motion.aside>
          }
        </Col>
      )}
      {/* eslint-disable-next-line no-shadow */}
      {sections.map(({ ...props }, idx) => (
        <Col span={cardSpan}>
          <motion.aside
            {...fadeIn}
            transition={{
              ...fadeIn.transition,
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
