import { useUrlResolver } from "components/partials/UrlResolver"
import NavBar from "components/organisms/NavBar"
import React, { useCallback } from "react"
import Image from "next/image"

function PageNavBar({ links, primaryButton, secondaryButton, ...props }) {
  const urlResolver = useUrlResolver()

  const resolveHref = useCallback(
    (href) => {
      return href?.indexOf("#") !== 0 ? urlResolver(href) : href
    },
    [urlResolver]
  )

  const resolveButton = useCallback(
    (button) => {
      return button?.link?.url
        ? {
            ...button,
            link: { ...button.link, url: resolveHref(button.link.url) },
          }
        : button
    },
    [urlResolver]
  )

  const resolvedLinks = links.map(({ href = "", ...link }) => ({
    href: resolveHref(href),
    ...link,
  }))

  return (
    <NavBar
      links={resolvedLinks}
      primaryButton={resolveButton(primaryButton)}
      secondaryButton={resolveButton(secondaryButton)}
      animationPreset="none"
      availLogo={
        <Image
          src="/logo-wordmark.svg"
          aria-label="Avail"
          alt="Avail"
          title="Avail"
          height={48}
          width={195}
          priority
        />
      }
      rdcLogo={
        <Image
          src="/rdc-family-logo.svg"
          aria-label="Realtor.com"
          alt="Realtor.com family logo"
          title="Realtor.com"
          width={131}
          height={36}
          priority
        />
      }
      {...props}
    />
  )
}

export default PageNavBar
