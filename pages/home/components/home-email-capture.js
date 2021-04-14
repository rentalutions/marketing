import React from "react"

import { Box } from "@rent_avail/layout"

import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"

import EmailCaptureInput from "components/molecules/EmailCaptureInput"

import { CONTAINER_WIDTHS } from "config"

const HERO_PROPS = {
  title: "Ready to get started?",
  description: "Create an account for free.",
  inputLabel: "Enter your Email",
  buttonText: "Join Today",
  buttonUrl: "https://www.avail.co/users/new?utf8=%E2%9C%93&commit=Join+Today",
  queryParamName: "email",
  signInText: {
    text: "Already a member?",
    linkText: "Sign in here.",
    link: {
      url: "https://www.avail.co/login",
      target: "_blank",
    },
  },
}

const HomeEmailCapture = (props) => (
  <Hero
    {...props}
    title={
      <RichText
        render={[
          {
            text: HERO_PROPS.title,
            type: "heading1",
            spans: [],
          },
        ]}
      />
    }
    description={
      <RichText
        render={[
          {
            text: HERO_PROPS.description,
            type: "heading3",
            spans: [],
          },
        ]}
      />
    }
    containerWidth={CONTAINER_WIDTHS}
    skew="none"
    stretch={false}
    overflow="hidden"
    color="blue_900"
  >
    <Box pt="2rem">
      <EmailCaptureInput
        inputLabel={HERO_PROPS.inputLabel}
        buttonText={HERO_PROPS.buttonText}
        buttonUrl={HERO_PROPS.buttonUrl}
        queryParamName={HERO_PROPS.queryParamName}
        analyticsParamName="Email"
      />
    </Box>
    <RichText
      render={[
        {
          text: `${HERO_PROPS.signInText.text} `,
          type: "label",
          spans: [],
        },
        {
          text: HERO_PROPS.signInText.linkText,
          type: "hyperlink",
          data: HERO_PROPS.signInText.link,
          spans: [],
        },
      ]}
    />
  </Hero>
)

export default HomeEmailCapture
