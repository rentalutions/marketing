import React from "react"
import { FAQ } from "components/organisms/FAQ"
import { CONTAINER_WIDTHS } from "config"
import { styleEmbed } from "utils/embed"
import RichText from "../RichText"

export default function FrequentlyAskedQuestionsSlice({ slice }) {
  const {
    primary: { background, color, title, description, eyebrow },
  } = slice

  const questions = slice.items.map(({ question, answer }) => ({
    question,
    answer: (
      <RichText
        render={styleEmbed(answer, {
          maxWidth: "65rem",
          height: "unset",
          margin: "auto",
          aspectRatio: "16/9",
          paddingBottom: 0,
        })}
      />
    ),
  }))

  return (
    <FAQ
      title={title?.[0]?.text && <RichText render={title} />}
      description={description?.[0]?.text && <RichText render={description} />}
      eyebrow={eyebrow?.[0]?.text && <RichText render={eyebrow} />}
      questions={questions}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      py="6rem"
    />
  )
}
