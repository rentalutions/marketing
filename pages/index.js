import { Router } from "next/router"
import { prismicClient } from "src/prismic.config"

const IndexPage = () => {
  return null
}

/** TODO: Come up with a tag to indicate "production" pages in CMS and
 *        redirect to the first "production" page instead */
const possibleLandingPages = ["listings-100001", "listings"]

IndexPage.getInitialProps = async ({ res }) => {
  const { results: pages } = await prismicClient.query("")

  const landingPage =
    pages.find((page) => possibleLandingPages.includes(page.uid)) || pages[0]

  if (res) {
    res.writeHead(302, { Location: `/${landingPage.type}/${landingPage.uid}` })
    res.end()
    return {}
  }

  Router.push(`/info/${landingPage.uid}`)
  return {}
}

export default IndexPage
