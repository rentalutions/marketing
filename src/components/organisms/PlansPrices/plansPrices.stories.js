import React from "react"
import { Button } from "@rent_avail/controls"
import { Box } from "@rent_avail/layout"
import { PlansPrices } from "./index"
import PlanInfo from "./planInfo"

export default { title: "Components/Plans and Prices" }

function Features() {
  return (
    <React.Fragment>
      <b>Features Title:</b>
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
        <li>Feature D</li>
        <li>Feature E</li>
      </ul>
    </React.Fragment>
  )
}

const plans = [
  {
    title: "Basic",
    price: "Free",
    subtext: "Subtext",
    description: "Description",
    features: Features,
  },
  {
    title: "Unlimited",
    price: "$4.99",
    subtext: "Subtext",
    description: "Description",
    features: Features,
  },
  {
    title: "Unlimited Plus",
    price: "$9.99",
    subtext: "Subtext",
    description: "Description",
    features: Features,
    background: "#F9DE89",
    buttonColor: "#443D26",
    buttonBackground: "#B6A264",
  },
]

function planWithImage(p) {
  return {
    ...p,
    image: { url: "/send-money.png", alt: "" },
  }
}

function planWithButton(p) {
  return {
    ...p,
    button: (
      <Button as="a" variant="primary" href="https://avail.co">
        Button Text
      </Button>
    ),
  }
}

export function Horizontal() {
  return (
    <Box background="#E9EDF1">
      <PlansPrices
        direction="horizontal"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans}
      />
    </Box>
  )
}

export function HorizontalWithImage() {
  return (
    <Box background="#E9EDF1">
      <PlansPrices
        direction="horizontal"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans.map(planWithImage)}
      />
    </Box>
  )
}

export function HorizontalWithButton() {
  return (
    <Box background="#E9EDF1">
      <PlansPrices
        direction="horizontal"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans.map(planWithButton)}
      />
    </Box>
  )
}

export function HorizontalWithImageAndButton() {
  return (
    <Box color="#FFF" background="#0B2E51">
      <PlansPrices
        direction="horizontal"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans
          .map(planWithImage)
          .map(planWithButton)
          .map((p) => ({
            ...p,
            color: "#000",
          }))}
      />
    </Box>
  )
}

export function Vertical() {
  return (
    <Box background="#E9EDF1">
      <PlansPrices
        direction="vertical"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans}
      />
    </Box>
  )
}

export function VerticalWithImage() {
  return (
    <Box background="#E9EDF1">
      <PlansPrices
        direction="vertical"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans.map(planWithImage)}
      />
    </Box>
  )
}

export function VerticalWithButton() {
  return (
    <Box background="#E9EDF1">
      <PlansPrices
        direction="vertical"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans.map(planWithButton)}
      />
    </Box>
  )
}

export function VerticalWithImageAndButton() {
  return (
    <Box color="#FFF" background="#0B2E51">
      <PlansPrices
        direction="vertical"
        title={<Box as="h1">Title</Box>}
        subtitle={<Box as="h2">Subtitle</Box>}
        link={<a className="link">Text Link</a>}
        plans={plans
          .map(planWithImage)
          .map(planWithButton)
          .map((p) => ({
            ...p,
            color: "#000",
          }))}
      />
    </Box>
  )
}

export function StandAlonePlanInfo() {
  return (
    <PlanInfo
      image={{ url: "/user-card.png", alt: "" }}
      title="Plan 3"
      price="$9.99"
      subtext="Subtext"
      description="Description"
    />
  )
}
