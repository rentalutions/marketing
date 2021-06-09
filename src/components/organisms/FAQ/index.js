import React, { useState, cloneElement } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { variant } from "styled-system"
import { useInViewAnimation } from "utils/animation"
import { Box, Container, Stack } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { STYLING } from "config"

const Accordion = styled(Box)(
  {},
  variant({
    variants: {
      opened: {},
      collapsed: {
        "&:hover": {
          cursor: "pointer",
          opacity: 0.75,
        },
      },
    },
  })
)

function FAQ({
  questions,
  outro,
  eyebrow,
  title,
  description,
  color,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [openIdx, setOpen] = useState(null)
  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <Box
      as={motion.aside}
      {...animation?.container}
      color={color}
      {...props}
      ref={intersectionView}
    >
      <Container {...(containerWidth && { maxWidth: containerWidth })}>
        {eyebrow && (
          <motion.aside {...animation?.item}>
            {cloneElement(eyebrow, {
              color: color || "blue_300",
              mb: "1rem",
            })}
          </motion.aside>
        )}
        {title && (
          <motion.aside {...animation?.item}>
            {cloneElement(title, {
              mb: "1rem",
              sx: { ...STYLING.headline, ...title.props?.sx },
            })}
          </motion.aside>
        )}
        {description && (
          <motion.aside {...animation?.item}>
            <Box mb="1rem">{description}</Box>
          </motion.aside>
        )}
        {outro && (
          <motion.aside {...animation?.item}>
            <Box mb="2rem">{outro}</Box>
          </motion.aside>
        )}
        <Stack>
          {questions.map(({ question, answer: Answer }, idx) => {
            const isOpen = idx === openIdx
            return (
              <motion.aside key={question} {...animation?.item}>
                <Accordion
                  borderRadius="0.25rem"
                  mb="2rem"
                  p="2rem"
                  bg="blue_100"
                  onClick={() => setOpen(idx)}
                  variant={isOpen ? "opened" : "collapsed"}
                >
                  <Text fontWeight="800">{question}</Text>
                  <AnimatePresence>
                    {isOpen && (
                      <Box
                        key="answer"
                        as={motion.div}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={{
                          open: { height: "auto", opacity: 1, marginTop: 12 },
                          closed: { height: 0, opacity: 0, marginTop: 0 },
                        }}
                      >
                        {typeof Answer === "function" ? <Answer /> : Answer}
                      </Box>
                    )}
                  </AnimatePresence>
                </Accordion>
              </motion.aside>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}

export { FAQ }
