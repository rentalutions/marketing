import React from "react"
import { Box } from "@rent_avail/layout"
import ResponsiveEmbed from "components/elements/ResponsiveEmbed"
import { Text } from "@rent_avail/typography"
import { Button } from "@rent_avail/controls"
import { PitchCards } from "./index"

export default { title: "Components/Pitch Cards" }

const sectionData = [
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

const sections = sectionData.map(({ title, description }) => ({
  title: <Box as="h3">{title}</Box>,
  description,
}))

const icons = [
  <img src="/send-money.png" width="100%" alt="" />,
  <img src="/state-specific.png" width="100%" alt="" />,
  <img src="/user-card.png" width="100%" alt="" />,
  <img src="/property-damage.png" width="100%" alt="" />,
]

const iconSections = sections.map((section, idx) => ({
  ...section,
  icon: icons[idx],
}))

const links = [
  <Text as="a" href="https://www.avail.co/users/new?intent=listings">
    Advertise across the web &gt;
  </Text>,
  <Text as="a" href="https://www.avail.co/users/new?intent=applications">
    Find the right tenants &gt;
  </Text>,
  <Text as="a" href="https://www.avail.co/users/new?intent=applications">
    Start screening applicants &gt;
  </Text>,
  <Text as="a" href="https://www.avail.co/users/new?intent=leases">
    Send and sign today &gt;
  </Text>,
]

const linkSections = iconSections.map((section, idx) => ({
  ...section,
  link: links[idx],
}))

const buttonLinkSections = sectionData.map(({ title, description }, idx) => ({
  title: (
    <Box as="h3" textAlign="center">
      {title}
    </Box>
  ),
  description,
  link: <Button>View sample</Button>,
  variant: "button",
}))

const videoSections = sections.slice(0, 2).map((section) => ({
  ...section,
  video: {
    url: "/media/sample-video.mp4",
  },
}))

const embedSections = sections.slice(0, 2).map((section) => ({
  ...section,
  embed: (
    <ResponsiveEmbed aspect={{ width: 200, height: 113 }}>
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
  ),
}))

export function Default() {
  return (
    <PitchCards
      sections={sections}
      eyebrow="Eyebrow"
      title={
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
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
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
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
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
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
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
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
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}

export function WithButtonLinks() {
  return (
    <PitchCards
      sections={buttonLinkSections.slice(0, 3)}
      eyebrow="Eyebrow"
      title={
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}

export function WithVideo() {
  return (
    <PitchCards
      sections={videoSections}
      eyebrow="Eyebrow"
      title={
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}

export function WithEmbed() {
  return (
    <PitchCards
      sections={embedSections}
      eyebrow="Eyebrow"
      title={
        <Box as="h2" mb="1rem">
          Let Me Pitch You
        </Box>
      }
      description="A pre-designed piece of content perfect for showcasing the top features of a product or service. It's more condensed than the how-it-works section."
      mt="4rem"
    />
  )
}
