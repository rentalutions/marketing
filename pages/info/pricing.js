import React from "react"
import { motion } from "framer-motion"
import { Box, Container } from "@rent_avail/layout"
import { theme } from "@rent_avail/base"
import { Heading } from "@rent_avail/typography"
import { Check } from "react-feather"
import { createGlobalStyle } from "styled-components"
import { CONTAINER_WIDTHS } from "config"
import Button from "components/elements/Button"
import { PlansPrices } from "components/organisms/PlansPrices"
import NavBar from "components/organisms/NavBar"
import AvailFooter from "components/partials/AvailFooter"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.ui_300};
  }
`
const links = [
  {
    text: "Sing up",
    href: "https://www.avail.co/users/new",
    primary: true,
    target: "_blank",
    push: true,
  },
]

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
    background: "blue_100",
    features: FeaturesPlus,
  },
]

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

const PricingTextItem = ({text, sx}) => <Box sx={{margin: "1rem 0 1rem 0", ...sx}}>
  <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
  <span>{text}</span>
</Box>

const PricingHeaderItem = ({text, sx}) => <Box style={{ margin: "1rem 0 1rem 0" }}>
  <Heading as={sx}>{text}</Heading>
</Box>

const Hello = () => {
  return (
    <>
      <NavBar links={links} sticky />
      <GlobalStyle />
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
        <PricingHeaderItem text={'Get the tools for every part of the rental cycle.'} sx={'h3'}/>
        <PricingHeaderItem text={'Listings'} sx={'h4'}/>
        <PricingTextItem text={'Verified landlord badge and for rent sign.'} />
        <PricingTextItem text={'Listings syndicated to Zillow, Trulia, Hotpads, Zumper, Padmapper, Walkscore, Realtor.com, Doorsteps.com, Apartments.com, and ApartmentList.'} />
        <PricingTextItem text={'Social sharing tools and suggested actions.'} />
        <PricingTextItem text={'Custom marketing and portfolio site with tenant portal.'} />
        <PricingTextItem text={'Lead management tools and messaging center.'} />
        <PricingTextItem text={'Schedule showings automatically from any platform or listing partner.'} />
        <PricingHeaderItem text={'Screening'} sx={'h4'}/>
        <PricingTextItem text={'Tenant-initiated TransUnion credit reports and background checks.'} />
        <PricingTextItem text={'Nationwide criminal history report.'} />
        <PricingTextItem text={'Nationwide prior eviction reports.'} />
        <PricingTextItem text={'Automated residence and employment reference checks.'} />
        <PricingTextItem text={'Income verification and documentation.'} />
        <PricingTextItem text={'Applicant communication and message center.'} />
        <PricingTextItem text={'Customizable screening questions.'} />
        <PricingHeaderItem text={'Leasing'} sx={'h4'}/>
        <PricingTextItem text={'Digital signatures.'} />
        <PricingTextItem text={'State-specific, lawyer-reviewed lease templates.'} />
        <PricingTextItem text={'Locally-generated clauses, rules, and disclosures powered by LocalAssist.'} />
        <PricingTextItem text={'Unlimited document attachments.'} />
        <PricingTextItem text={'Print and PDF lease generation.'} />
        <PricingTextItem text={'Customizable clauses and rules.'} />
        <PricingHeaderItem text={'Payments'} sx={'h4'}/>
        <PricingTextItem text={'Direct-deposit online rent payments.'} />
        <PricingTextItem text={'Specialized deposit and fee collection.'} />
        <PricingTextItem text={'Auto-generated payment receipts and confirmation.'} />
        <PricingTextItem text={'Rent reminders and notifications.'} />
        <PricingTextItem text={'Automatic recurring payment setup.'} />
        <PricingTextItem text={'Next-day payment deposits.'} />
        <PricingTextItem text={'Auto-assessed late fees (one-time or recurring).'} />
        <PricingTextItem text={'Tenant messaging.'} />
        <PricingTextItem text={'Property-specific bank accounts.'} />
        <PricingTextItem text={'Rent payments reported to credit bureaus with CreditBoost.'} />
        <PricingHeaderItem text={'Maintenance'} sx={'h4'}/>
        <PricingTextItem text={'Tenant- and landlord-initiated ticket creation and tracking.'} />
        <PricingTextItem text={'Auto-forwarding to maintenance professionals.'} />
        <PricingTextItem text={'Photo uploads and workflows.'} />
        <PricingHeaderItem text={'Tenants pay for the following:'} sx={'h4'}/>
      </Container>
      <AvailFooter />
    </>
  )
}

export default Hello
