import React from "react"
import { RichText } from "prismic-reactjs"
import { PitchCards } from "../../pitch-cards"

const PitchCardsSlice = ({ slice }) => {
  const { pitch_title, pitch_text, pitch_eyebrow } = slice.primary
  const sections = slice.fields.map((card) => {
    return {
      title: card.card_title,
      description: <RichText render={card.card_text} />,
      icon: card.card_icon.url,
    }
  })
  return (
    <PitchCards
      title={pitch_title}
      description={<RichText render={pitch_text} />}
      eyebrow={pitch_eyebrow}
      sections={sections}
      span="6"
    />
  )
}

export default PitchCardsSlice
