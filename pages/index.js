import { Router } from "next/router"
import { prismicClient } from "src/prismic.config"
import Prismic from "prismic-javascript"

const IndexPage = () => {
  return null
}

/** TODO: Come up with a tag to indicate "production" pages in CMS and
 *        redirect to the first "production" page instead */
const possibleFirstPages = ["listings-100001", "listings"]

IndexPage.getInitialProps = async ({ res }) => {
  const { results: infoPages } = await prismicClient.query(
    Prismic.Predicates.at("document.type", "info")
  )

  const landingPage =
    infoPages.find((page) => possibleFirstPages.includes(page.uid)) ||
    infoPages[0]

  if (res) {
    res.writeHead(302, { Location: `/info/${landingPage.uid}` })
    res.end()
    return {}
  }

  Router.push(`/info/${landingPage.uid}`)
  return {}
}

export default IndexPage
