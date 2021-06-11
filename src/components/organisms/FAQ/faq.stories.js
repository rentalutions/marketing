import React from "react"
import { Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import ResponsiveEmbed from "components/elements/ResponsiveEmbed"
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

function AnswerWithEmbed() {
  return (
    <React.Fragment>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        possimus officiis tenetur, ex tempora repellat quibusdam, ab soluta
        neque incidunt magni earum architecto veritatis rerum optio consectetur
        adipisci minus dicta.
      </Text>
      <ResponsiveEmbed
        aspect={{ width: 200, height: 113 }}
        sx={{
          maxWidth: "65rem",
          height: "unset",
          margin: "auto",
          aspectRatio: "16/9",
          paddingBottom: 0,
          marginTop: 1,
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          width="200"
          height="113"
          src="https://www.youtube.com/embed/RMMatpUtmZo?feature=oembed"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </ResponsiveEmbed>
    </React.Fragment>
  )
}

function EmbedAnswer() {
  return (
    <ResponsiveEmbed
      aspect={{ width: 200, height: 113 }}
      sx={{
        maxWidth: "65rem",
        height: "unset",
        margin: "auto",
        aspectRatio: "16/9",
        paddingBottom: 0,
        marginTop: 1,
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        width="200"
        height="113"
        src="https://www.youtube.com/embed/RMMatpUtmZo?feature=oembed"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ResponsiveEmbed>
  )
}

export function Default() {
  const questions = [
    { question: "What are the hidden costs?", answer: Answer },
    { question: "What are the hidden costs?", answer: Answer },
    { question: "What are the hidden costs?", answer: AnswerWithEmbed },
    { question: "What are the hidden costs?", answer: EmbedAnswer },
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
      outro={
        <Text>
          <em>Still have questions?</em> Visit our{" "}
          <a href="#" className="link">
            FAQ page
          </a>{" "}
          for more helpful information.
        </Text>
      }
      questions={questions}
      py="4rem"
    />
  )
}
