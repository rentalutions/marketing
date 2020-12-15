import React from "react"
import { FAQ } from "components/organisms/FAQ"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"

const FrequentlyAskedQuestionsSlice = ({ slice }) => {
  const {
    primary: {
      background,
      color,
      title,
      description,
      eyebrow,
    },
  } = slice

  const questions = slice.items.map(({ question, answer }) => ({
    question,
    answer: <RichText render={answer} />,
  }))

  return (
    <FAQ
      title={<RichText render={title} heading />}
      description={<RichText render={description} />}
      eyebrow={<RichText render={eyebrow} />}
      questions={questions}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
    />
  )
}

export default FrequentlyAskedQuestionsSlice
