import React from "react"
import { motion } from "framer-motion"
import { Box, Container } from "@rent_avail/layout"
import { Text, Heading } from "@rent_avail/typography"
import { Check } from "react-feather"
import { useUrlResolver } from "components/partials/UrlResolver"
import { CONTAINER_WIDTHS } from "config"
import Button from "components/elements/Button"
import { PlansPrices } from "components/organisms/PlansPrices"
import NavBar from "components/organisms/NavBar"
import AvailFooter from "components/partials/AvailFooter"

function Features() {
  return (
    <React.Fragment>
      <Box>
        <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
        <span>Syndicated Listings</span>
      </Box>
      <Box>
        <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
        <span>Credit and Criminal Screening</span>
      </Box>
      <Box>
        <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
        <span>State-Specific Leases</span>
      </Box>
      <Box>
        <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
        <span>Online Rent Payments</span>
      </Box>
      <Box>
        <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
        <span>Maintenance Tracking</span>
      </Box>
    </React.Fragment>
  )
}

function FeaturesPlus() {
  return (
    <React.Fragment>
      <Box width="24rem" style={{ margin: "0 0 2rem 6rem" }}>
        <span><b>Unlimited Plus </b>includes everything in<b> Unlimited </b>plus these premium features:</span>
      </Box>
      <Box width="24rem" style={{ margin: "0 0 1rem 6rem" }}>
        <span>Next-Day Rent Payments</span>
      </Box>
      <Box width="24rem" style={{ margin: "0 0 1rem 6rem" }}>
        <span>Waived ACH Fees</span>
      </Box>
      <Box width="24rem" style={{ margin: "0 0 1rem 6rem" }}>
        <span>Custom Applications and Leases</span>
      </Box>
      <Box width="24rem" style={{ margin: "0 0 1rem 6rem" }}>
        <span>Clone and Reuse Custom Lease Agreements</span>
      </Box>
      <Box width="24rem" style={{ margin: "0 0 1rem 6rem" }}>
        <span>Create a Properties Website</span>
      </Box>
    </React.Fragment>
  )
}

const plans = [
  {
    title: "Unlimited Plan",
    price: "$0/unit",
    subtext: "Unlimited Units",
    description: "",
    features: Features,
  },
  {
    title: "Unlimited Plus Plan",
    price: "$5/unit",
    subtext: "Per Month",
    description: "",
    features: FeaturesPlus,
  },
]

const NavBarWrapper = ({ links, ...props }) => {
  const urlResolver = useUrlResolver()
  const resolvedLinks = links.map(({ href = "", ...link }) => ({
    href: href.indexOf("#") !== 0 ? urlResolver(href) : href,
    ...link,
  }))
  return <NavBar links={resolvedLinks} {...props} />
}

function planWithButton(p, idx) {
  return {
    ...p,
    button: (
      <Button
        forwardedAs="a"
        variant={idx % 2 === 0 ? "primary" : "default"}
        href="https://avail.co"
      >
        Get Started
      </Button>
    ),
  }
}

const Hello = () => {
  return (
    <>
      <NavBarWrapper
        links={['1', '2']}
        sticky={true}
        borderBottom={`1px solid grey`}
        containerWidth={CONTAINER_WIDTHS}
      />
      <PlansPrices
        direction = "vertical"
        title={<Box as="h1">Free for landlords</Box>}
        subtitle={<Box></Box>}
        link={<a className="link"></a>}
        plans={plans.map(planWithButton)}
        containerWidth = {CONTAINER_WIDTHS}
        animationPreset = "fadeIn"
      />
      <Container
        as={motion.aside}
        maxWidth={CONTAINER_WIDTHS}
        py="6rem"
      >
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Heading as="h3">Get the tools for every part of the rental cycle.</Heading>
        </Box>
        <Box style={{ margin: "2rem 0 1rem 0" }}>
          <Heading as="h4">Listings</Heading>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Verified landlord badge and for rent sign.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Listings syndicated to Zillow, Trulia, Hotpads, Zumper, Padmapper, Walkscore, Realtor.com, Doorsteps.com, Apartments.com, and ApartmentList.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Social sharing tools and suggested actions.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Custom marketing and portfolio site with tenant portal.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Lead management tools and messaging center.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Schedule showings automatically from any platform or listing partner.</span>
        </Box>
        <Box style={{ margin: "2rem 0 1rem 0" }}>
          <Heading as="h4">Screening</Heading>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Tenant-initiated TransUnion credit reports and background checks.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Nationwide criminal history report.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Nationwide prior eviction reports.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Automated residence and employment reference checks.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Income verification and documentation.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Applicant communication and message center.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Customizable screening questions.</span>
        </Box>
        <Box style={{ margin: "2rem 0 1rem 0" }}>
          <Heading as="h4">Leasing</Heading>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Digital signatures.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>State-specific, lawyer-reviewed lease templates.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Locally-generated clauses, rules, and disclosures powered by LocalAssist.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Unlimited document attachments.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Print and PDF lease generation.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Customizable clauses and rules.</span>
        </Box>
        <Box style={{ margin: "2rem 0 1rem 0" }}>
          <Heading as="h4">Payments</Heading>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Direct-deposit online rent payments.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Specialized deposit and fee collection.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Auto-generated payment receipts and confirmation.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Rent reminders and notifications.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Automatic recurring payment setup.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Next-day payment deposits.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Auto-assessed late fees (one-time or recurring).</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Tenant messaging.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Property-specific bank accounts.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Rent payments reported to credit bureaus with CreditBoost.</span>
        </Box>
        <Box style={{ margin: "2rem 0 1rem 0" }}>
          <Heading as="h4">Maintenance</Heading>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Tenant- and landlord-initiated ticket creation and tracking.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Auto-forwarding to maintenance professionals.</span>
        </Box>
        <Box style={{ margin: "1rem 0 1rem 0" }}>
          <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
          <span>Photo uploads and workflows.</span>
        </Box>
        <Box style={{ margin: "4rem 0 1rem 0" }}>
          <Heading as="h4">Tenants pay for the following:</Heading>
        </Box>
      </Container>
      <AvailFooter />
    </>
  )
}

export default Hello
