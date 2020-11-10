import { gql } from "@apollo/client"
import { Box } from "@rent_avail/layout"
import client from "../prismic.config"
import { Heading } from "@rent_avail/typography"
import { Hero } from "../components/Hero"
import React from "react"
import { useTheme } from "styled-components"
import HomeSliceZone from "../components/slices/HomeSliceZone"
import Head from "next/head"

const HOMEPAGE_QUERY = gql`
  query getHomepage {
    allHomepages {
      edges {
        node {
          title
          tagline
          button_link {
            ... on _ExternalLink {
              url
              target
            }
          }
          button_text
          image
          body {
            ... on HomepageBodyPitch_cards {
              type
              primary {
                pitch_title
                pitch_text
                pitch_eyebrow
              }
              fields {
                card_icon {
                  ... on _ImageLink {
                    url
                  }
                }
                card_text
                card_title
              }
            }
            ... on HomepageBodyText {
              type
              primary {
                text
              }
            }
          }
        }
      }
    }
  }
`

const getInitialProps = async (ctx) => {
  const { data } = await client.query({
    query: HOMEPAGE_QUERY,
    fetchPolicy: "network-only",
  })
  return {
    data,
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

Home.getInitialProps = getInitialProps

export default Home
