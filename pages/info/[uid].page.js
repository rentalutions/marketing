import React from "react"
import { prismicClient } from "src/prismic.config"
import { NextSeo } from "next-seo"
import AvailFooter from "components/partials/AvailFooter"
import SliceZone from "components/partials/SliceZone"
import { createGlobalStyle, useTheme } from "styled-components"
import { CONTAINER_WIDTHS } from "config"
import { UrlResolverProvider } from "components/partials/UrlResolver"
import { useRouter } from "next/router"
import DefaultErrorPage from "next/error"
import Head from "next/head"
import { theme } from "@rent_avail/base"
import { Box, Flex } from "@rent_avail/layout"
import PageNavBar from "components/partials/PageNavBar"
import { analyticsVar } from "utils/analytics"

export const getStaticProps = async ({
  preview = null,
  previewData = {},
  params: { uid },
}) => {
  const data = await prismicClient.getByUID("info", uid, { ...previewData })
  return {
    props: {
      preview,
      previewData,
      ...data,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const pages = await prismicClient.query("", { pageSize: 100 })
  const paths = pages.results.map((p) => `/info/${p.uid}`)
  return { paths, fallback: true }
}

const BodyStyles = createGlobalStyle`
  body {
    background-color: ${({ bg }) => theme.colors[bg]};
  }
`

const Page = ({ data, uid }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Box>Loading...</Box>
      </Flex>
    )
  }

  if (!data) {
    return (
      <React.Fragment>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </React.Fragment>
    )
  }
  const { colors } = useTheme()

  const BASE_CANONICAL_URL =
    process.env.NEXT_PUBLIC_BASE_CANONICAL_URL || "https://info.avail.co"

  const url = `${BASE_CANONICAL_URL}/info/${uid}`

  const {
    meta_title: title,
    meta_description: description,
    meta_keywords: keywords,
    nav_bar_type: navBarType,
    background = "ui_100",
    sticky_nav_bar: navBarSticky,
    nav_bar: navBar,
    body: slices,
  } = data

  const primaryButton = (({
    primaryButtonId: id = "nav-primary-bt",
    primaryButtonText: text,
    primaryButtonLink: link,
    primaryButtonHash: hash,
  }) => text && { id, text, link, hash })(data)

  const secondaryButton = (({
    secondaryButtonId: id = "nav-secondary-bt",
    secondaryButtonText: text,
    secondaryButtonLink: link,
    secondaryButtonHash: hash,
  }) => text && { id, text, link, hash })(data)

  /* eslint-disable camelcase */
  const urlResolverParams = (({
    query_channel: channel,
    query_content: utm_content,
    query_signup_page: signup_page,
    query_campaign: utm_campaign,
    query_source: utm_source,
    query_medium: utm_medium,
  }) => ({
    signup_page,
    channel,
    utm_content,
    utm_campaign,
    utm_source,
    utm_medium,
  }))(data)
  /* eslint-enable camelcase */

  analyticsVar({ ...analyticsVar(), ...urlResolverParams })

  const navBarLinks = navBar?.map(
    ({ buttonText, buttonLink, buttonHash, buttonId }) => ({
      text: buttonText,
      href: buttonHash ? `#${buttonHash.replace(/^#/, "")}` : buttonLink.url,
      target: buttonLink && buttonLink.target,
      id: buttonId,
    })
  )
  return (
    <React.Fragment>
      <BodyStyles bg={background} />
      <UrlResolverProvider params={urlResolverParams}>
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            title,
            description,
            url,
          }}
          additionalMetaTags={[{ property: "keywords", content: keywords }]}
        />
        <PageNavBar
          borderBottom={navBarSticky ? `1px solid ${colors.ui_500}` : "none"}
          containerWidth={CONTAINER_WIDTHS}
          type={navBarType}
          sticky={navBarSticky}
          primaryButton={primaryButton}
          secondaryButton={secondaryButton}
          links={navBarLinks}
        />
        <SliceZone slices={slices} />
        <AvailFooter />
      </UrlResolverProvider>
    </React.Fragment>
  )
}

export default Page
