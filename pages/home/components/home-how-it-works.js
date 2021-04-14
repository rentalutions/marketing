import React from "react"

import { Hero } from "components/organisms/Hero"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"

import { CONTAINER_WIDTHS } from "config"

const SECTIONS_PROPS = [
  {
    title:
      "Advertise your property on top rental listing sites in just a few minutes.",
    description: [
      "Create a rental listing with our step-by-step guidance. We’ll publish your listing across the web. Leads from prospective tenants come straight to your inbox and dashboard.",
      "Keep the conversation going with your potential tenants directly from the app by scheduling showings, asking pre-screening questions, and even requesting rental applications to learn more about the applicant.",
    ],
    linkText: "Learn more about online listings.",
    link: {
      url: "https://www.avail.co/landlords/rental-listings",
      target: "_blank",
    },
    image: {
      url: "/home/feature_listings.png",
      alt: "List your property with Avail",
    },
  },
  {
    title:
      "Learn more about potential tenants with a complete renter profile and history.",
    description: [
      "When you request an application we’ll send instructions to your applicants' email address. They’ll provide information about their residence history, employment and income verification, and contact information.",
      "Applicants can complete their profiles in minutes.",
    ],
    linkText: "Learn more about rental applications.",
    link: {
      url: "https://www.avail.co/landlords/online-rental-applications",
      target: "_blank",
    },
    image: {
      url: "/home/feature_renter_profile.png",
      alt: "Renter profile",
    },
  },
  {
    title:
      "Request credit, criminal background, and eviction reports, from anyone, at no cost to you.",
    description: [
      "You’ll decide which TransUnion reports to require. Pick from a credit report, criminal background report, and eviction report. View these reports instantly in your account.",
      "Your applicants will appreciate that the TransUnion reports generated will never hurt their credit scores and can be reused in unlimited applications within a 90 day timeframe.",
    ],
    linkText: "Learn more about reports and checks.",
    link: {
      url: "https://www.avail.co/landlords/credit-and-background-check",
      target: "_blank",
    },
    image: {
      url: "/home/feature_screening.png",
      alt: "Comprehensive background checks",
    },
  },
  {
    title:
      "Customize a lease tailored for your property’s location. Our legal team did the work so you don’t have to.",
    description: [
      "Starting with our state-specific templates, draft a custom lease by adding or editing your clauses, rules, and attachments. Complete your disclosures and send the lease to your tenants for signing.",
      "Once finalized, sign the lease online with a secure, legally-binding e-signature.",
    ],
    linkText: "Learn more about Local Assist and online leasing.",
    link: {
      url: "https://www.avail.co/landlords/rental-lease-agreement",
      target: "_blank",
    },
    image: {
      url: "/home/feature_leasing.png",
      alt: "Local Assist helps make writing leases easy",
    },
  },
  {
    title:
      "Your rent is direct-deposited to your bank, so you don’t have to make the trip.",
    description: [
      "Request payments from your tenants by simply typing in their email address and the rent amount.",
      "Quickly link your bank account, and that’s it. Your tenants will receive an email from us with instructions for paying their rent, security deposit, or any fees using their bank account or credit card.",
      "With the fastest rent payments in the industry, you can be sure you’ll receive your rent on time.",
    ],
    linkText: "Learn more about rent payments.",
    link: {
      url: "https://www.avail.co/landlords/online-rent-collection",
      target: "_blank",
    },
    image: {
      url: "/home/feature_payments.png",
      alt: "Collect rent and deposits",
    },
  },
  {
    title:
      "Transparent maintenance and repair tracking saves time for the everyday landlord.",
    description: [
      "Allow tenants to submit maintenance requests, upload photos of the issue, and track progress. You and your tenants will receive status updates in real time. To help you solve the issue, we provide contact info for top-rated contractors in your area. Easily track repair expenses to make tax season easier.",
    ],
    linkText: "Learn more about maintenance tracking.",
    link: {
      url: "https://www.avail.co/landlords/maintenance-tracking",
      target: "_blank",
    },
    image: {
      url: "/home/feature_maintenance.png",
      alt: "Easily track maintenance requests",
    },
  },
]

const HomeHowItWorks = (props) => {
  const sections = SECTIONS_PROPS.map((sectionProps, idx) => (
    <Hero
      {...props}
      title={
        <RichText
          render={[
            {
              text: sectionProps.title,
              type: "heading2",
              spans: [],
            },
          ]}
        />
      }
      description={
        <RichText
          sx={{
            color: "blue_500",
            py: "1rem",
          }}
          render={[
            ...sectionProps.description.map((text) => ({
              text,
              type: "paragraph",
              spans: [],
            })),
            {
              text: sectionProps.linkText,
              type: "hyperlink",
              data: sectionProps.link,
              spans: [],
            },
          ]}
        />
      }
      containerWidth={CONTAINER_WIDTHS}
      stretch={false}
      skew="left"
      bg={idx % 2 === 1 ? "ui_300" : "blue_100"}
      imagePosition={idx % 2 === 1 ? "right" : "left"}
      image={sectionProps.image}
      color="blue_900"
    />
  ))
  return sections
}

export default HomeHowItWorks
