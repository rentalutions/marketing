import { useUrlResolver } from "components/partials/UrlResolver"
import NavBar from "components/organisms/NavBar"
import React, { useCallback } from "react"

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
      {...props}
    />
  )
}

export default PageNavBar
