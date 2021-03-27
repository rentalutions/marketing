import React from "react"
import { motion } from "framer-motion"
import { Box, Container } from "@rent_avail/layout"
import { theme } from "@rent_avail/base"
import { Text, Heading } from "@rent_avail/typography"
import { Check } from "react-feather"
import { createGlobalStyle } from "styled-components"
import { CONTAINER_WIDTHS } from "config"
import Button from "components/elements/Button"
import { ButtonCTA } from "components/organisms/ButtonCTA"
import { PlansPrices } from "components/organisms/PlansPrices"
import NavBar from "components/organisms/NavBar"
import AvailFooter from "components/partials/AvailFooter"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.ui_300};
  }
`

const primaryButton = {
  text: "Sing up",
  link: {
    url: "https://www.avail.co/users/new",
    target: "_blank",
  },
}

function Features() {
  return (
    <React.Fragment>
      <PricingTextItem>Syndicated Listings</PricingTextItem>
      <PricingTextItem>Credit and Criminal Screening</PricingTextItem>
      <PricingTextItem>State-Specific Leases</PricingTextItem>
      <PricingTextItem>Online Rent Payments</PricingTextItem>
      <PricingTextItem>Maintenance Tracking</PricingTextItem>
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
      <Box style={{ margin: "0 0 1rem 6rem" }}>
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

const PricingTextItem = ({style, children}) => <Box sx={{margin: "1rem 0 1rem 0", ...style}}>
  <Check size="1.3334rem" style={{ marginRight: "1rem" }} />
  <Text style={{display: "inline"}}>{children}</Text>
</Box>

const PricingHeaderItem = ({as, children}) => <Box style={{ margin: "4rem 0 2rem 0" }}>
  <Heading as={as}>{children}</Heading>
</Box>

const Hello = () => {
  return (
    <>
      <NavBar links={[primaryButton]} sticky />
      <GlobalStyle />
      <PlansPrices
        direction = "vertical"
        title={<Box as="h1">Free for landlords</Box>}
        subtitle={<Box></Box>}
        link={<a className="link"></a>}
        plans={plans.map((p, idx) => {
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
          )}})
        }
        containerWidth = {CONTAINER_WIDTHS}
        animationPreset = "fadeIn"
      />
      <Container
        as={motion.aside}
        maxWidth={"70rem"}
        py="6rem"
      >
        <PricingHeaderItem as="h3">Get the tools for every part of the rental cycle.</PricingHeaderItem>
        <PricingHeaderItem as="h4">Listings</PricingHeaderItem>
        <PricingTextItem>Verified landlord badge and for rent sign.</PricingTextItem>
        <PricingTextItem>Listings syndicated to Zillow, Trulia, Hotpads, Zumper, Padmapper, Walkscore, Realtor.com, Doorsteps.com, Apartments.com, and ApartmentList.</PricingTextItem>
        <PricingTextItem>Social sharing tools and suggested actions.</PricingTextItem>
        <PricingTextItem>Custom marketing and portfolio site with tenant portal.</PricingTextItem>
        <PricingTextItem>Lead management tools and messaging center.</PricingTextItem>
        <PricingTextItem>Schedule showings automatically from any platform or listing partner.</PricingTextItem>
        <PricingHeaderItem as="h4">Screening</PricingHeaderItem>
        <PricingTextItem>Tenant-initiated TransUnion credit reports and background checks.</PricingTextItem>
        <PricingTextItem>Nationwide criminal history report.</PricingTextItem>
        <PricingTextItem>Nationwide prior eviction reports.</PricingTextItem>
        <PricingTextItem>Automated residence and employment reference checks.</PricingTextItem>
        <PricingTextItem>Income verification and documentation.</PricingTextItem>
        <PricingTextItem>Applicant communication and message center.</PricingTextItem>
        <PricingTextItem>Customizable screening questions.</PricingTextItem>
        <PricingHeaderItem as="h4">Leasing</PricingHeaderItem>
        <PricingTextItem>Digital signatures.</PricingTextItem>
        <PricingTextItem>State-specific, lawyer-reviewed lease templates.</PricingTextItem>
        <PricingTextItem>Locally-generated clauses, rules, and disclosures powered by LocalAssist.</PricingTextItem>
        <PricingTextItem>Unlimited document attachments.</PricingTextItem>
        <PricingTextItem>Print and PDF lease generation.</PricingTextItem>
        <PricingTextItem>Customizable clauses and rules.</PricingTextItem>
        <PricingHeaderItem as="h4">Payments</PricingHeaderItem>
        <PricingTextItem>Direct-deposit online rent payments.</PricingTextItem>
        <PricingTextItem>Specialized deposit and fee collection.</PricingTextItem>
        <PricingTextItem>Auto-generated payment receipts and confirmation.</PricingTextItem>
        <PricingTextItem>Rent reminders and notifications.</PricingTextItem>
        <PricingTextItem>Automatic recurring payment setup.</PricingTextItem>
        <PricingTextItem>Next-day payment deposits.</PricingTextItem>
        <PricingTextItem>Auto-assessed late fees (one-time or recurring).</PricingTextItem>
        <PricingTextItem>Tenant messaging.</PricingTextItem>
        <PricingTextItem>Property-specific bank accounts.</PricingTextItem>
        <PricingTextItem>Rent payments reported to credit bureaus with CreditBoost.</PricingTextItem>
        <PricingHeaderItem as="h4">Maintenance</PricingHeaderItem>
        <PricingTextItem>Tenant- and landlord-initiated ticket creation and tracking.</PricingTextItem>
        <PricingTextItem>Auto-forwarding to maintenance professionals.</PricingTextItem>
        <PricingTextItem>Photo uploads and workflows.</PricingTextItem>
        <PricingHeaderItem as="h4">Tenants pay for the following:</PricingHeaderItem>
        <Box width="60rem" style={{ margin: "1rem 0 1rem 0" }}>
          <span><b>Application Fees</b><br></br>Credit, criminal background, and eviction checks cost $30 each or can be bundled together for $55. Landlords choose the required reports for each applicant.</span>
        </Box>
        <Box width="60rem" style={{ margin: "1rem 0 1rem 0" }}>
          <span><b>Payment Fees</b><br></br>For landlords on the Unlimited Plus Plan, there are no fees when tenants pay from a bank account. With the Unlimited (free) Plan, tenants would pay $2.50 per bank transfer. If a credit or debit card is used, a 3.5% processing fee is added to tenant payments regardless of subscription plan.</span>
        </Box>
        <Box width="60rem" style={{ margin: "1rem 0 1rem 0" }}>
          <span><b>Renters Insurance</b><br></br>Avail makes it easy for Tenants to purchase insurance through Lemonade Inc. This rate varies based on the tenant and the property.</span>
        </Box>
        <ButtonCTA
          title={
            <Box color="blue_500">
              <Box as="h3">Ready to get started?</Box>
              <Heading color="blue_300" as="h4">
                Sign up for the Unlimited Plan today.
              </Heading>
            </Box>
          }
          button={
            <Button forwardedAs="a" variant="primary" href="https://avail.co">
              Start now
            </Button>
          }
          orientation="left"
        />
      </Container>
      <AvailFooter />
    </>
  )
}

export default Hello
