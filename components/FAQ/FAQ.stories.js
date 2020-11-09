import React, { Fragment } from "react"
import { FAQ } from "."
import { Text } from "@rent_avail/typography"

export default { title: "FAQ" }

function Answer() {
  return (
    <Fragment>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        possimus officiis tenetur, ex tempora repellat quibusdam, ab soluta
        neque incidunt magni earum architecto veritatis rerum optio consectetur
        adipisci minus dicta.
      </Text>
    </Fragment>
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
