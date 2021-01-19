import React from "react"
import { NextSeo } from "next-seo"
import AvailFooter from "components/partials/AvailFooter"
import SliceZone from "components/partials/SliceZone"
import NavBar from "components/organisms/NavBar"
import { useTheme } from "styled-components"
import { CONTAINER_WIDTHS } from "config"
import {
  UrlResolverProvider,
  useUrlResolver,
} from "components/partials/UrlResolver"
import { useRouter } from "next/router"
import DefaultErrorPage from "next/error"
import Head from "next/head"
import { Box, Flex } from "@rent_avail/layout"
import { useGetStaticPaths, useGetStaticProps } from "src/next.helpers"

export const getStaticProps = useGetStaticProps("info")

export const getStaticPaths = useGetStaticPaths("info")

const NavBarWrapper = ({ links, ...props }) => {
  const urlResolver = useUrlResolver()
  const resolvedLinks = links.map(({ href = "", ...link }) => ({
    href: href.indexOf("#") !== 0 ? urlResolver(href) : href,
    ...link,
  }))
  return <NavBar links={resolvedLinks} {...props} />
}

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
    sticky_nav_bar: navBarSticky,
    body: slices,
  } = data

  const urlResolverParams = (({
    query_channel: channel,
    query_content: content,
    query_signup_page: signup_page, // eslint-disable-line camelcase
    query_campaign: campaign,
  }) => ({ channel, content, signup_page, campaign }))(data)

  const navBarLinks =
    data.nav_bar &&
    data.nav_bar.map(
      ({ buttonText, buttonLink, buttonHash, primary, push }) => ({
        text: buttonText,
        href: buttonHash ? `#${buttonHash.replace(/^#/, "")}` : buttonLink.url,
        target: buttonLink && buttonLink.target,
        primary,
        push,
      })
    )
  return (
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
      <NavBarWrapper
        links={navBarLinks}
        sticky={navBarSticky}
        borderBottom={navBarSticky ? `1px solid ${colors.ui_500}` : "none"}
        containerWidth={CONTAINER_WIDTHS}
      />
      <SliceZone slices={slices} />
      <AvailFooter />
    </UrlResolverProvider>
  )
}

export default Page
