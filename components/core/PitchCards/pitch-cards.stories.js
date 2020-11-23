import React from "react"
import { Heading } from "@rent_avail/typography"
import { PitchCards } from "."

export default { title: "Components/Pitch Cards" }

const sections = [
  {
    title: (
      <Heading as="h5" mb="2rem">
        Great for any situation.
      </Heading>
    ),
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ipsum natus velit explicabo eligendi.",
  },
  {
    title: (
      <Heading as="h5" mb="2rem">
        Automatically Mobile Friendly.
      </Heading>
    ),
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam minima quia placeat laudantium debitis ipsum.",
  },
  {
    title: (
      <Heading as="h5" mb="2rem">
        Customize how you see fit.
      </Heading>
    ),
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam minima quia placeat laudantium .",
  },
  {
    title: (
      <Heading as="h5" mb="2rem">
        Lets you focus on the story.
      </Heading>
    ),
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo eligendi tenetur sed quo.",
  },
]

const icons = [
  { url: "/send-money.png", alt: "" },
  { url: "/state-specific.png", alt: "" },
  { url: "/user-card.png", alt: "" },
  { url: "/property-damage.png", alt: "" },
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
