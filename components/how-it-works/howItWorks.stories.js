import * as React from "react"
import { HowItWorks } from "."
import { Heading } from "@rent_avail/typography"

export default { title: "How It Works" }

const basicSections = [
  {
    copy: (
      <React.Fragment>
        <h3>Look at our amazing feature.</h3>
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
    },
  },
  {
    copy: (
      <React.Fragment>
        <h3>Look at our amazing feature.</h3>
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
