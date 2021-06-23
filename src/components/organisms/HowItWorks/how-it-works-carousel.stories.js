import * as React from "react"
import { Heading } from "@rent_avail/typography"
import { HowItWorksCarousel } from "./how-it-works-carousel"

export default { title: "Components/How It Works (Carousel)" }

const basicSections = [
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Lorem ipsum dolor sit amet
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          magnam odio architecto sed dolorem dolores sit, laboriosam debitis
          saepe quo doloribus. Ab, odio corrupti! Ratione nulla dolor id
          veritatis tempora.
        </p>
      </React.Fragment>
    ),
    image: <img src="/feature-image.svg" width="100%" alt="" />,
  },
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Suspendisse ut diam diam
        </Heading>
        <p>
          Sed at consequat dolor. Integer auctor, nulla nec ullamcorper
          sagittis, eros nulla pellentesque eros, ut bibendum turpis nulla sit
          amet nulla. Cras luctus turpis at tincidunt eleifend. Duis laoreet
          pulvinar nisi quis ultricies. Pellentesque aliquam elementum urna
          vitae rhoncus.
        </p>
      </React.Fragment>
    ),
    image: <img src="/feature-image.svg" width="100%" alt="" />,
  },
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Quisque mattis porttitor purus
        </Heading>
        <p>
          Nulla sed pharetra velit. Praesent in pretium erat. Integer a urna
          efficitur, feugiat orci et, ultrices eros. Quisque tempus vulputate
          nisi non rhoncus. Mauris facilisis vitae urna eu mollis. Quisque
          venenatis ut leo et malesuada.
        </p>
      </React.Fragment>
    ),
    image: <img src="/feature-image.svg" width="100%" alt="" />,
  },
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Nullam justo est
        </Heading>
        <p>
          Proin ut neque id purus luctus placerat et sed tortor. Donec vitae
          eros sodales, euismod nibh sed, consequat ante. Integer tempus
          pharetra ligula, a ultrices nibh congue ut. Praesent laoreet mattis
          turpis in tempor. Donec auctor massa sed hendrerit venenatis.
        </p>
      </React.Fragment>
    ),
    image: <img src="/feature-image.svg" width="100%" alt="" />,
  },
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Maecenas quis venenatis erat
        </Heading>
        <p>
          Curabitur volutpat tempus nisl, quis facilisis quam cursus nec. In
          malesuada ultrices odio efficitur egestas. Duis ac placerat nisl. Ut
          magna ante, aliquet non egestas et, pretium vel orci. Integer tortor
          tortor, dictum nec arcu at, tempor lacinia leo. Vivamus faucibus
          mauris metus. Integer et mi odio.
        </p>
      </React.Fragment>
    ),
    image: <img src="/feature-image.svg" width="100%" alt="" />,
  },
  {
    copy: (
      <React.Fragment>
        <Heading as="h3" mb="2rem">
          Suspendisse potenti
        </Heading>
        <p>
          Quisque quis libero consequat, pharetra nibh quis, interdum neque.
          Vivamus eget ipsum nec nunc ultrices fringilla vulputate eu quam.
          Pellentesque imperdiet lobortis purus
        </p>
      </React.Fragment>
    ),
    image: <img src="/feature-image.svg" width="100%" alt="" />,
  },
]

export function Default() {
  return (
    <HowItWorksCarousel
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
    <HowItWorksCarousel
      mt="4rem"
      eyebrow="Learn more."
      alternate={() => true}
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
