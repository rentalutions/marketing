import React from "react"
import { PitchCards } from "."

export default { title: "Pitch Cards" }

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

export function Default() {
  return (
    <PitchCards
      sections={sections}
      eyebrow="Eyebrow"
      title="Let Me Pitch You"
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
      title="Let Me Pitch You"
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
      title="Let Me Pitch You"
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
      title="Let Me Pitch You"
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}
