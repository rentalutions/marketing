import React from "react"
import { Box } from "@rent_avail/layout"
import { STYLING } from "config"
import { ArticleList } from "./index"

export default { title: "Components/ArticleList" }

const articles = [
  {
    image: {
      element: (
        <img src="/stories/article-list/guide-to-rent-collection.png" alt="" />
      ),
    },
    tag: "Rent Collection",
    link: {
      href:
        "https://www.avail.co/education/guides/complete-guide-to-rent-collection",
    },
    linkType: "link",
    linkLabel: "Read more",
    title: <Box as={"h3"}>The Complete Guide to Rental Leases</Box>,
    content: (
      <Box as="p">
        In each chapter of this guide, we&apos;ll provide expert advice on rent
        collection....
      </Box>
    ),
  },
  {
    image: {
      element: (
        <img src="/stories/article-list/guide-to-rental-leases.png" alt="" />
      ),
    },
    tag: "Rental leases",
    link: {
      href:
        "https://www.avail.co/education/guides/complete-guide-to-rental-leases",
    },
    linkType: "link",
    linkLabel: "Read more",
    title: <Box as={"h3"}>The Complete Guide to Rental Leases</Box>,
    content: (
      <Box as="p">
        There are several things to do before you sign your lease. From
        researching state laws to including the right clauses, we&apos;ll help
        you every step...
      </Box>
    ),
  },
]

const readMoreArticle = {
  bg: "blue_100",
  sx: { boxShadow: "none" },
  link: {
    href:
      "https://www.avail.co/education/guides/complete-guide-to-rental-leases",
  },
  linkType: "button",
  linkLabel: "Read more guides",
  title: (
    <Box as={"h3"} sx={{ ...STYLING.subtitle }}>
      It’s time to hit the books!
    </Box>
  ),
  content: (
    <Box as="p">
      Learn the fundamentals of being a great landlord with our free collection
      of in-depth guidebooks.
    </Box>
  ),
}
export function Default() {
  return (
    <Box width="100%" py="4rem" bg="ui_300">
      <ArticleList
        containerWidth="86rem"
        title={<Box as="h2">Do it yourself doesn&apos;t mean do it alone.</Box>}
        description={
          <Box as="h3">
            Join the 219,042+ landlords who use Avail to responsibly manage
            their properties.
          </Box>
        }
        articles={[...articles, readMoreArticle]}
      />
    </Box>
  )
}

export function ManyArticles() {
  return (
    <Box width="100%" py="4rem" bg="ui_300">
      <ArticleList
        containerWidth="86rem"
        title={<Box as="h2">Do it yourself doesn&apos;t mean do it alone.</Box>}
        description={
          <Box as="h3">
            Join the 219,042+ landlords who use Avail to responsibly manage
            their properties.
          </Box>
        }
        articles={[...articles, ...articles, readMoreArticle]}
      />
    </Box>
  )
}
