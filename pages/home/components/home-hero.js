import React from "react"

import { Box } from "@rent_avail/layout"

import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"

import EmailCaptureInput from "components/molecules/EmailCaptureInput"

import { CONTAINER_WIDTHS } from "config"

const HERO_PROPS = {
  title: "Feel good about the way you manage your rentals.",
  description:
    "Find tenants, view credit history, sign leases, and collect rent — on any device, with tools built specifically for DIY landlords.",
  image: {
    url: "/home/hero-bg.png",
  },
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

const HomeHero = (props) => (
  <Hero
    {...props}
    sx={{
      backgroundImage: `url('${HERO_PROPS.image.url}')`,
      backgroundPosition: [
        "top calc((100vh - 2rem) * -0.15) right calc(100vw * -0.1)",
        "top calc((100vh - 2rem) * -0.15) right calc(100vw * -0.1)",
        "top calc((100vh - 2rem) * -0.15) right 0",
      ],
      backgroundSize: ["500px", "500px", "900px"],
      backgroundRepeat: "no-repeat",
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: [
          "linear-gradient(to top, #f3f3f3 60%, rgba(255,255,255,0)),linear-gradient(to right, #f3f3f3, rgba(255,255,255,0))",
          "linear-gradient(to top, #f3f3f3 60%, rgba(255,255,255,0)),linear-gradient(to right, #f3f3f3, rgba(255,255,255,0))",
          "linear-gradient(to top, #f3f3f3 40%, rgba(255,255,255,0)),linear-gradient(to right, #f3f3f3 25%, rgba(255,255,255,0))",
          "linear-gradient(to top, #f3f3f3 40%, rgba(255,255,255,0)),linear-gradient(to right, #f3f3f3 40%, rgba(255,255,255,0))",
          "linear-gradient(to top, #f3f3f3 40%, rgba(255,255,255,0)),linear-gradient(to right, #f3f3f3 40%, rgba(255,255,255,0))",
          "linear-gradient(to top, #f3f3f3 40%, rgba(255,255,255,0)),linear-gradient(to right, #f3f3f3 55%, rgba(255,255,255,0))",
        ],
      },
      "& > *:first-child": {
        pt: "30vh",
      },
    }}
    title={
      <RichText
        sx={{ color: "blue_900" }}
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
        sx={{ color: "ui_700" }}
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
    stretch
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

export default HomeHero
