import React from "react"
import { FAQ } from "components/organisms/FAQ"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"

export default function FrequentlyAskedQuestionsSlice({ slice }) {
  const {
    primary: { background, color, title, description, eyebrow },
  } = slice

  const questions = slice.items.map(({ question, answer }) => ({
    question,
    answer: <RichText render={answer} />,
  }))

  return (
    <FAQ
      title={title[0]?.text && <RichText render={title} />}
      description={description[0]?.text && <RichText render={description} />}
      eyebrow={eyebrow[0]?.text && <RichText render={eyebrow} />}
      questions={questions}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      py="6rem"
    />
  )
}
