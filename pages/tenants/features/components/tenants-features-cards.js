import React from "react"

import { Text } from "@rent_avail/typography"

import { PitchCards } from "components/organisms/PitchCards"
import Link from "components/partials/SliceZone/components/Link"
import RichText from "components/partials/SliceZone/components/RichText"

import { CONTAINER_WIDTHS } from "config"

const SECTIONS = [
  {
    icon: {
      url: "/feature_icons/renter-profile.png",
      alt: "Renter profile",
    },
    title: "Renter Profile",
    description:
      "Stop filling out the same rental application forms and paying application fees. Create a renter profile once and share it with multiple landlords for free. Best yet, your profile is a living document that grows with you.",
    link: {
      href: "https://www.avail.co/users/new",
      text: "Create your profile >",
    },
  },
  {
    icon: {
      url: "/feature_icons/rent_deposits_or_fees.png",
      alt: "Rent deposits or fees",
    },
    title: "Online Rent Payments",
    description:
      "Mailing a check is outdated. Conveniently pay your rent online in the resident portal. You can also turn on AutoPay from your phone or computer. ",
    link: {
      href: "https://www.avail.co/users/new",
      text: "Make a payment >",
    },
  },
  {
    icon: {
      url: "/feature_icons/credit-boost.png",
      alt: "Credit boost",
    },
    title: "CreditBoost",
    description:
      "You pay your rent on time, so why shouldn't you get credit for it? CreditBoost allows your landlord to automatically report on-time payments directly to the credit bureaus to help boost your credit score.",
    link: {
      href: "https://www.avail.co/users/new",
      text: "Learn more about credit reporting >",
    },
  },
  {
    icon: {
      url: "/feature_icons/247_document_storage.png",
      alt: "247 document storage",
    },
    title: "Online Leases",
    description:
      "No more printing and scanning a lease to your landlord. Review and sign your lease online in a few simple clicks. Your lease will also be easily accessible in your account whenever you need it.",
    link: {
      href: "https://www.avail.co/users/new",
      text: "Sign your lease online >",
    },
  },
  {
    icon: {
      url: "/feature_icons/maintenance.png",
      alt: "Maintenance",
    },
    title: "Maintenance Tickets",
    description:
      "Broken ovens and sudden leaks aren't fun, but the Avail maintenance request features give you peace of mind. Message your landlord, share photos of the issue, and see real-time status updates.",
    link: {
      href: "https://www.avail.co/users/new",
      text: "Discover peace of mind >",
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
      <RichText
        sx={{ color: "blue_900" }}
        render={[
          {
            text: description,
            type: "paragraph",
            spans: [],
          },
        ]}
      />
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
