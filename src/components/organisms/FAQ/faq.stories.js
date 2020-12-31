import React from "react"
import { Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import { FAQ } from "./index"

export default { title: "Components/FAQ" }

function Answer() {
  return (
    <React.Fragment>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        possimus officiis tenetur, ex tempora repellat quibusdam, ab soluta
        neque incidunt magni earum architecto veritatis rerum optio consectetur
        adipisci minus dicta.
      </Text>
    </React.Fragment>
  )
}

export function Default() {
  const questions = [
    { question: "What are the hidden costs?", answer: Answer },
    { question: "What are the hidden costs?", answer: Answer },
    { question: "What are the hidden costs?", answer: Answer },
    { question: "What are the hidden costs?", answer: Answer },
  ]
  return (
    <FAQ
      eyebrow={<Text>FAQ</Text>}
      title={<Box as="h2">Answers to common questions</Box>}
      description={
        <Text>
          Ab soluta neque incidunt magni earum architecto veritatis rerum optio
          consectetur adipisci minus dicta.
        </Text>
      }
      questions={questions}
      py="4rem"
    />
  )
}
