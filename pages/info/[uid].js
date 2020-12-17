import React from "react"
import { prismicClient } from "src/prismic.config"
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
  return { paths, fallback: false }
}

const NavBarWrapper = ({ links, ...props }) => {
  const urlResolver = useUrlResolver()
  const resolvedLinks = links.map(({ href = "", ...link }) => ({
    href: href.indexOf("#") !== 0 ? urlResolver(href) : href,
    ...link,
  }))
  return <NavBar links={resolvedLinks} {...props} />
}

const Page = ({ data, uid }) => {
  if (!data) {
    return null
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
      ({ buttonText, buttonLink, buttonHash, primary, push, breakpoint }) => ({
        text: buttonText,
        href: buttonHash ? `#${buttonHash.replace(/^#/, "")}` : buttonLink.url,
        primary,
        push,
        breakpoint,
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
