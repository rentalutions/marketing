import React from "react"
import Showcase from "components/organisms/Showcase/index"
import { Heading, Text } from "@rent_avail/typography"

const cases = [
  {
    icon: "Code",
    copy: (
      <Text>
        Your information is yours alone and will <b>never be shared</b> with any
        third parties.
      </Text>
    ),
  },
  {
    icon: "Cpu",
    copy: (
      <Text>
        Your personal information is encrypted with{" "}
        <b>256-bit, bank-level SSL encryption</b>.
      </Text>
    ),
  },
  {
    icon: "Clock",
    copy: (
      <Text>
        Our servers are automatically <b>monitored 24/7</b> and have a 99.7%
        uptime guarantee.
      </Text>
    ),
  },
]

function HomeShowcase(props) {
  return (
    <Showcase
      {...props}
      py="6rem"
      copy={
        <React.Fragment>
          <Heading as="h2" fontSize="3rem" mb="2rem">
            Focus on your properties, let us worry about the hard stuff.
          </Heading>
          <Text>
            With 128-bit encryption and a consistently monitored network, your
            data and privacy are our highest concern.
          </Text>
        </React.Fragment>
      }
      image={{
        url: "/home/safe.png",
        alt: "Safe",
      }}
      cases={cases}
      caseInterval={4000}
      flip
    />
  )
}

export default HomeShowcase
