import React from "react"
import { motion } from "framer-motion"
import { Box, Container, Flex } from "@rent_avail/layout"
import { theme } from "@rent_avail/base"
import { Text, Heading } from "@rent_avail/typography"
import { Check } from "react-feather"
import { createGlobalStyle } from "styled-components"
import Button from "components/elements/Button"
import { ButtonCTA } from "components/organisms/ButtonCTA"
import { PlansPrices } from "components/organisms/PlansPrices"
import NavBar from "components/organisms/NavBar"
import AvailFooter from "components/partials/AvailFooter"
import { useInViewAnimation } from "utils/animation"
import { NextSeo } from "next-seo"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.ui_300};
  }
`

const primaryButton = {
  text: "Sign up",
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
      <Box sx={{ m: "0 0 2rem 0" }}>
        <span>
          <b>Unlimited Plus </b>includes everything in<b> Unlimited </b>plus
          these premium features:
        </span>
      </Box>
      <Box sx={{ m: "0 0 1rem 0" }}>
        <span>Next-Day Rent Payments</span>
      </Box>
      <Box sx={{ m: "0 0 1rem 0" }}>
        <span>Waived ACH Fees</span>
      </Box>
      <Box sx={{ m: "0 0 1rem 0" }}>
        <span>Custom Applications and Leases</span>
      </Box>
      <Box sx={{ m: "0 0 1rem 0" }}>
        <span>Clone and Reuse Custom Lease Agreements</span>
      </Box>
      <Box sx={{ m: "0 0 1rem 0" }}>
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

const PricingTextItem = ({ style, children }) => {
  const [presets, intersectionView] = useInViewAnimation({
    containerDuration: "default",
    threshold: 0.25,
  })
  const animation = presets.fadeIn
  return (
    <Box
      ref={intersectionView}
      as={motion.div}
      sx={{ margin: "1rem 0 1rem 0", ...style }}
      {...animation?.container}
    >
      <Flex as={motion.div} {...animation?.item} sx={{ alignItems: "center" }}>
        <Check size="1.3334rem" style={{ marginRight: "1rem", flex: "none" }} />
        <Text>{children}</Text>
      </Flex>
    </Box>
  )
}

const PricingHeaderItem = ({ as, children }) => {
  const [presets, intersectionView] = useInViewAnimation({
    containerDuration: "default",
    threshold: 0.25,
  })
  const animation = presets.fadeIn
  return (
    <Box
      ref={intersectionView}
      {...animation?.container}
      as={motion.div}
      sx={{ m: "4rem 0 2rem 0" }}
    >
      <Heading {...animation?.item} as={as}>
        {children}
      </Heading>
    </Box>
  )
}

const Pricing = () => {
  const [presets, intersectionView] = useInViewAnimation({
    containerDuration: "default",
    threshold: 0.25,
  })
  const animation = presets.fadeIn
  const title = "Pricing Plans & Features | Avail"
  const description =
    "View pricing plans for Avail online landlord software. Avail helps landlords manage rental properties, find and screen tenants, create leases and collect rent."
  const url = "http://info.avail.co/pricing"
  return (
    <React.Fragment>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <NavBar primaryButton={primaryButton} sticky />
      <GlobalStyle />
      <PlansPrices
        direction="vertical"
        title={<Box as="h1">Free for landlords</Box>}
        plans={plans.map((p, idx) => ({
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
        }))}
        animationPreset="fadeIn"
      />
      <Container maxWidth={"70rem"} py="6rem">
        <PricingHeaderItem as="h3">
          Get the tools for every part of the rental cycle.
        </PricingHeaderItem>
        <PricingHeaderItem as="h4">Listings</PricingHeaderItem>
        <PricingTextItem>
          Verified landlord badge and for rent sign.
        </PricingTextItem>
        <PricingTextItem>
          Listings syndicated to Zillow, Trulia, Hotpads, Zumper, Padmapper,
          Walkscore, Realtor.com, Doorsteps.com, Apartments.com, and
          ApartmentList.
        </PricingTextItem>
        <PricingTextItem>
          Social sharing tools and suggested actions.
        </PricingTextItem>
        <PricingTextItem>
          Custom marketing and portfolio site with tenant portal.
        </PricingTextItem>
        <PricingTextItem>
          Lead management tools and messaging center.
        </PricingTextItem>
        <PricingTextItem>
          Schedule showings automatically from any platform or listing partner.
        </PricingTextItem>
        <PricingHeaderItem as="h4">Screening</PricingHeaderItem>
        <PricingTextItem>
          Tenant-initiated TransUnion credit reports and background checks.
        </PricingTextItem>
        <PricingTextItem>Nationwide criminal history report.</PricingTextItem>
        <PricingTextItem>Nationwide prior eviction reports.</PricingTextItem>
        <PricingTextItem>
          Automated residence and employment reference checks.
        </PricingTextItem>
        <PricingTextItem>
          Income verification and documentation.
        </PricingTextItem>
        <PricingTextItem>
          Applicant communication and message center.
        </PricingTextItem>
        <PricingTextItem>Customizable screening questions.</PricingTextItem>
        <PricingHeaderItem as="h4">Leasing</PricingHeaderItem>
        <PricingTextItem>Digital signatures.</PricingTextItem>
        <PricingTextItem>
          State-specific, lawyer-reviewed lease templates.
        </PricingTextItem>
        <PricingTextItem>
          Locally-generated clauses, rules, and disclosures powered by
          LocalAssist.
        </PricingTextItem>
        <PricingTextItem>Unlimited document attachments.</PricingTextItem>
        <PricingTextItem>Print and PDF lease generation.</PricingTextItem>
        <PricingTextItem>Customizable clauses and rules.</PricingTextItem>
        <PricingHeaderItem as="h4">Payments</PricingHeaderItem>
        <PricingTextItem>Direct-deposit online rent payments.</PricingTextItem>
        <PricingTextItem>
          Specialized deposit and fee collection.
        </PricingTextItem>
        <PricingTextItem>
          Auto-generated payment receipts and confirmation.
        </PricingTextItem>
        <PricingTextItem>Rent reminders and notifications.</PricingTextItem>
        <PricingTextItem>Automatic recurring payment setup.</PricingTextItem>
        <PricingTextItem>Next-day payment deposits.</PricingTextItem>
        <PricingTextItem>
          Auto-assessed late fees (one-time or recurring).
        </PricingTextItem>
        <PricingTextItem>Tenant messaging.</PricingTextItem>
        <PricingTextItem>Property-specific bank accounts.</PricingTextItem>
        <PricingTextItem>
          Rent payments reported to credit bureaus with CreditBoost.
        </PricingTextItem>
        <PricingHeaderItem as="h4">Maintenance</PricingHeaderItem>
        <PricingTextItem>
          Tenant- and landlord-initiated ticket creation and tracking.
        </PricingTextItem>
        <PricingTextItem>
          Auto-forwarding to maintenance professionals.
        </PricingTextItem>
        <PricingTextItem>Photo uploads and workflows.</PricingTextItem>
        <PricingHeaderItem as="h4">
          Tenants pay for the following:
        </PricingHeaderItem>
        <Box
          ref={intersectionView}
          {...animation?.container}
          as={motion.div}
          maxWidth="60rem"
        >
          <Box
            {...animation?.item}
            as={motion.div}
            sx={{ margin: "1rem 0 1rem 0" }}
          >
            <span>
              <b>Application Fees</b>
              <br />
              Credit, criminal background, and eviction checks cost $30 each or
              can be bundled together for $55. Landlords choose the required
              reports for each applicant.
            </span>
          </Box>
          <Box
            {...animation?.item}
            as={motion.div}
            sx={{ margin: "1rem 0 1rem 0" }}
          >
            <span>
              <b>Payment Fees</b>
              <br />
              For landlords on the Unlimited Plus Plan, there are no fees when
              tenants pay from a bank account. With the Unlimited (free) Plan,
              tenants would pay $2.50 per bank transfer. If a credit or debit
              card is used, a 3.5% processing fee is added to tenant payments
              regardless of subscription plan.
            </span>
          </Box>
          <Box
            {...animation?.item}
            as={motion.div}
            sx={{ margin: "1rem 0 1rem 0" }}
          >
            <span>
              <b>Renters Insurance</b>
              <br />
              Avail makes it easy for Tenants to purchase insurance through
              Lemonade Inc. This rate varies based on the tenant and the
              property.
            </span>
          </Box>
        </Box>
        <ButtonCTA
          title={
            <Box>
              <Box as="h3">Ready to get started?</Box>
              <Heading color="ui_700" as="h4">
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
    </React.Fragment>
  )
}

export default Pricing
