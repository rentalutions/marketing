import React, { Fragment } from "react"
import { Text } from "@rent_avail/typography"
import { FAQ } from "."

export default { title: "Components/FAQ" }

function Answer() {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        possimus officiis tenetur, ex tempora repellat quibusdam, ab soluta
        neque incidunt magni earum architecto veritatis rerum optio consectetur
        adipisci minus dicta.
      </Text>
    </>
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
      eyebrow="FAQ"
      title="Answers to common questions"
      description="Ab soluta neque incidunt magni earum architecto veritatis rerum optio consectetur adipisci minus dicta."
      questions={questions}
      py="4rem"
    />
  )
}
