import React, { useMemo } from "react"
import dynamic from "next/dynamic"

const AvailNavBar = dynamic(() => import("./AvailNavBar"))
const AvailRdcNavBar = dynamic(() => import("./AvailRdcNavBar"))

export default function NavBar({
  background = "ui_100",
  containerWidth = "96rem",
  type = "Avail",
  sticky,
  primaryButton,
  secondaryButton,
  availLogo,
  rdcLogo,
  links = [],
  ...props
}) {
  const [primaryLink, secondaryLink] = useMemo(() => {
    function createLink({ id, text, link, hash }) {
      return {
        id,
        text,
        href: hash ? `#${hash.replace(/^#/, "")}` : link?.url,
        target: link?.target,
      }
    }

    const _primaryLink = primaryButton && createLink(primaryButton)
    const _secondaryLink = secondaryButton && createLink(secondaryButton)

    return [_primaryLink, _secondaryLink]
  }, [primaryButton, secondaryButton])

  switch (type) {
    case "Avail/RDC":
      return (
        <AvailRdcNavBar
          background={background}
          menuEntries={links}
          primaryLink={primaryLink}
          secondaryLink={secondaryLink}
          sticky={sticky}
          availLogo={availLogo}
          rdcLogo={rdcLogo}
          {...props}
        />
      )
    case "Avail":
    default:
      return (
        <AvailNavBar
          background={background}
          containerWidth={containerWidth}
          defaultLinks={links}
          primaryLink={primaryLink}
          secondaryLink={secondaryLink}
          sticky={sticky}
          availLogo={availLogo}
          {...props}
        />
      )
  }
}
