import * as React from "react"
import { Heading } from "@rent_avail/typography"
import { HowItWorks } from "."

export default { title: "Components/How It Works" }

const basicSections = [
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Look at our amazing feature.
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          magnam odio architecto sed dolorem dolores sit, laboriosam debitis
          saepe quo doloribus. Ab, odio corrupti! Ratione nulla dolor id
          veritatis tempora.
        </p>
      </React.Fragment>
    ),
    image: {
      url: "/feature-image.svg",
      alt: "",
    },
  },
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Look at our amazing feature.
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          magnam odio architecto sed dolorem dolores sit, laboriosam debitis
          saepe quo doloribus. Ab, odio corrupti! Ratione nulla dolor id
          veritatis tempora.
        </p>
      </React.Fragment>
    ),
    image: {
      url: "/feature-image.svg",
      alt: "",
    },
  },
]

export function Default() {
  return (
    <HowItWorks
      mt="4rem"
      eyebrow="Learn more."
      title={
        <Heading as="h3">An explanation of how this feature works</Heading>
      }
      sections={basicSections}
    />
  )
}

export function WithFlip() {
  return (
    <HowItWorks
      mt="4rem"
      eyebrow="Learn more."
      alternate={(idx) => idx % 2 === 0}
      bg="blue_500"
      color="blue_100"
      p="0 0 4rem"
      title={
        <Heading as="h3">An explanation of how this feature works</Heading>
      }
      sections={basicSections}
    />
  )
}
