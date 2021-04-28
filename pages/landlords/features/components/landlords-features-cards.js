import React from "react"

import { Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"

import { PitchCards } from "components/organisms/PitchCards"
import Link from "components/partials/SliceZone/components/Link"
import RichText from "components/partials/SliceZone/components/RichText"

import { CONTAINER_WIDTHS } from "config"

const SECTIONS = [
  {
    icon: {
      url: "/feature_icons/listing-status.png",
      alt: "Listing status",
    },
    title: "One-Click Listings",
    description: [
      "We make it simple to post rental listings online to reach more renters. Just create 1 listing and we’ll post it across the web to all major rental networks like Zillow and Trulia.",
    ],
    link: {
      href: "https://www.avail.co/users/new?intent=listings",
      text: "Advertise across the web >",
    },
  },
  {
    icon: {
      url: "/feature_icons/screening.png",
      alt: "Screening",
    },
    title: "Simple Rental Applications",
    description: [
      "Instead of juggling the stress of tenant rental applications and tenant screening, use Avail to request and review tenant applications online. It’s never been easier to ",
      {
        text: "find and keep quality tenants.",
        data: {
          label: "body__emphasis",
        },
      },
    ],
    link: {
      href: "https://www.avail.co/users/new?intent=applications",
      text: "Find the right tenants >",
    },
  },
  {
    icon: {
      url: "/feature_icons/application.png",
      alt: "Application",
    },
    title: "Credit & Background Checks",
    description: [
      "Avoid the frustrations by using our streamlined software. Simply enter your tenant’s email, wait for them to authorize the report, and soon you can ",
      {
        text: "review their full credit report online.",
        data: {
          label: "body__emphasis",
        },
      },
    ],
    link: {
      href: "https://www.avail.co/users/new?intent=applications",
      text: "Start screening applicants >",
    },
  },
  {
    icon: {
      url: "/feature_icons/e-signature.png",
      alt: "E signature",
    },
    title: "Online Leases",
    description: [
      "Step away from the fax machine. With Avail, you can ",
      {
        text: "customize a digital lease",
        data: {
          label: "body__emphasis",
        },
      },
      " and send it to your tenant to sign online. Hello convenience!",
    ],
    link: {
      href: "https://www.avail.co/users/new?intent=leases",
      text: "Send and sign today >",
    },
  },
  {
    icon: {
      url: "/feature_icons/tenant-paying-landlord.png",
      alt: "Tenant paying landlord",
    },
    title: "Online Rent Collection",
    description: [
      "It should be easy to pay rent online, and to collect rent online. We’ve also made it convenient to schedule rent due dates and track payments. We offer the fastest payments for online rent collection—check out ",
      {
        type: "hyperlink",
        text: "FastPay",
        data: {
          url: "https://www.avail.co/landlords/fastpay",
          target: "_blank",
        },
      },
      ".",
    ],
    link: {
      href: "https://www.avail.co/users/new?intent=payments",
      text: "Set up payments instantly >",
    },
  },
  {
    icon: {
      url: "/feature_icons/maintenance.png",
      alt: "Maintenance",
    },
    title: "Maintenance Tickets",
    description: [
      "Let your tenants submit maintenance tickets online. Forward requests to a contractor or rely on one of our suggested contractors. No more midnight phone calls.",
    ],
    link: {
      href: "https://www.avail.co/users/new?intent=maintenance",
      text: "Discover peace of mind >",
    },
  },
  {
    icon: {
      url: "/feature_icons/247_document_storage.png",
      alt: "247 document storage",
    },
    title: "Resident Portal",
    description: [
      "Renting should be easy for your tenants too. With Avail, your tenants get access to a resident portal for 24-hour access to pay rent, submit maintenance requests and more.",
    ],
    link: {
      href: "https://www.avail.co/tenants/feature-landing",
      text: "Learn more about tenant features >",
    },
  },
]

const TenantFeaturesCards = (props) => {
  const sections = SECTIONS.map(({ icon, title, description, link }) => ({
    key: title,
    icon,
    title: (
      <RichText
        sx={{ color: "blue_900" }}
        render={[
          {
            text: title,
            type: "heading1",
            spans: [],
          },
        ]}
      />
    ),
    description: (
      <Box sx={{ color: "blue_900" }}>
        <RichText
          render={description.map((item) => ({
            text: item.text || item,
            type: item.type || "label",
            data: item.data,
            spans: [],
          }))}
        />
      </Box>
    ),
    link: (
      <Link
        link={{
          url: link.href,
          target: "_blank",
        }}
      >
        <Text as="a" color="blue_500">
          {link.text}
        </Text>
      </Link>
    ),
  }))
  return (
    <PitchCards
      {...props}
      maxWidth={CONTAINER_WIDTHS}
      sections={sections}
      span={[12, 12, 6, 6, 4]}
    />
  )
}

export default TenantFeaturesCards
