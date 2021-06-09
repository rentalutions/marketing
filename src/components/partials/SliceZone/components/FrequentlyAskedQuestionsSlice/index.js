import React from "react"
import { FAQ } from "components/organisms/FAQ"
import { CONTAINER_WIDTHS } from "config"
import RichText from "../RichText"

export default function FrequentlyAskedQuestionsSlice({ slice }) {
  const {
    primary: { background, color, title, description, eyebrow, outro },
  } = slice

  const questions = slice.items.map(({ question, answer }) => ({
    question,
    answer: (
      <RichText
        render={answer}
        embedSx={{
          maxWidth: "65rem",
          height: "unset",
          margin: "auto",
          aspectRatio: "16/9",
          paddingBottom: 0,
          marginTop: 1,
        }}
      />
    ),
  }))

  return (
    <FAQ
      title={title?.[0]?.text && <RichText render={title} />}
      description={description?.[0]?.text && <RichText render={description} />}
      eyebrow={eyebrow?.[0]?.text && <RichText render={eyebrow} />}
      outro={outro?.[0]?.text && <RichText render={outro} />}
      questions={questions}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      py="6rem"
    />
  )
}
