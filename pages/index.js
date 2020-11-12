import { Box } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"
import React from "react"
import { useTheme } from "styled-components"
import Head from "next/head"
import HomeSliceZone from "../components/slices/home-slice-zone"
import { Hero } from "../components/hero"
import { getHomepage } from "../lib/api/homepage"

export const getStaticProps = async ({ preview = false, previewData = {} }) => {
  const result = await getHomepage({ previewData })
  const { data } = result
  return {
    props: { data, preview },
    revalidate: 1,
  }
}

const Home = ({ data }) => {
  const homepage = data.allHomepages.edges[0].node
  const { colors } = useTheme()
  return (
    <>
      <Head>
        <title>{homepage.title}</title>
      </Head>
      <Box as="main">
        <Hero
          color="ui_100"
          bg="blue_500"
          image={homepage.image.url}
          title={<Heading as="h1">{homepage.title}</Heading>}
          description={homepage.tagline}
          secondaryLink={{
            url: homepage.button_link.url,
            text: homepage.button_text,
            props: { color: "gold_500", textColor: colors.blue_500 },
          }}
        />
        <HomeSliceZone slices={homepage.body} />
        <Box height="12rem" bg="ui_300" />
      </Box>
    </>
  )
}

export default Home
