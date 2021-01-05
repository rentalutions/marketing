import * as React from "react"
import styled from "styled-components"
import { Box, Container, Stack } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { motion, AnimatePresence } from "framer-motion"
import { STYLING } from "config"

const Accordion = styled(Box)`
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`

function FAQ({
  questions,
  eyebrow,
  title,
  description,
  color,
  containerWidth,
  ...props
}) {
  const [openIdx, setOpen] = React.useState(null)
  return (
    <Box color={color} {...props}>
      <Container {...(containerWidth && { maxWidth: containerWidth })}>
        {eyebrow &&
          React.cloneElement(eyebrow, {
            color: color || "blue_300",
            mb: "1rem",
          })}
        {title &&
          React.cloneElement(title, {
            mb: "1rem",
            sx: { ...STYLING.headline, ...title.props?.sx },
          })}
        {description && <Box mb="2rem">{description}</Box>}
        <Stack>
          {questions.map(({ question, answer: Answer }, idx) => {
            const isOpen = idx === openIdx
            return (
              <Accordion
                borderRadius="0.25rem"
                p="2rem"
                bg="blue_100"
                onClick={(e) => setOpen(idx)}
                key={question}
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
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}

export { FAQ }
