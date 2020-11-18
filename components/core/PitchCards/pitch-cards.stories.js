import React from "react"
import { Heading } from "@rent_avail/typography"
import { PitchCards } from "."

export default { title: "Components/Pitch Cards" }

const sections = [
  {
    title: "Great for any situation.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ipsum natus velit explicabo eligendi.",
  },
  {
    title: "Automatically Mobile Friendly.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam minima quia placeat laudantium debitis ipsum.",
  },
  {
    title: "Customize how you see fit.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam minima quia placeat laudantium .",
  },
  {
    title: "Lets you focus on the story.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo eligendi tenetur sed quo.",
  },
]

const icons = [
  "/send-money.png",
  "/state-specific.png",
  "/user-card.png",
  "/property-damage.png",
]

const iconSections = sections.map((section, idx) => ({
  ...section,
  icon: icons[idx],
}))

const links = [
  {
    text: "Advertise across the web >",
    url: "https://www.avail.co/users/new?intent=listings",
  },
  {
    text: "Find the right tenants >",
    url: "https://www.avail.co/users/new?intent=applications",
  },
  {
    text: "Start screening applicants >",
    url: "https://www.avail.co/users/new?intent=applications",
  },
  {
    text: "Send and sign today >",
    url: "https://www.avail.co/users/new?intent=leases",
  },
]

const linkSections = iconSections.map((section, idx) => ({
  ...section,
  link: links[idx],
}))

export function Default() {
  return (
    <PitchCards
      sections={sections}
      eyebrow="Eyebrow"
      title={
        <Heading as="h2" mb="1rem">
          Let Me Pitch You
        </Heading>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}

export function WithIcons() {
  return (
    <PitchCards
      sections={iconSections}
      eyebrow="Eyebrow"
      title={
        <Heading as="h2" mb="1rem">
          Let Me Pitch You
        </Heading>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}

export function WithThreeSections() {
  return (
    <PitchCards
      sections={iconSections.slice(0, 3)}
      eyebrow="Eyebrow"
      title={
        <Heading as="h2" mb="1rem">
          Let Me Pitch You
        </Heading>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}

export function WithTwoSections() {
  return (
    <PitchCards
      sections={iconSections.slice(0, 2)}
      eyebrow="Eyebrow"
      title={
        <Heading as="h2" mb="1rem">
          Let Me Pitch You
        </Heading>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}

export function WithLinks() {
  return (
    <PitchCards
      sections={linkSections}
      eyebrow="Eyebrow"
      title={
        <Heading as="h2" mb="1rem">
          Let Me Pitch You
        </Heading>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}
