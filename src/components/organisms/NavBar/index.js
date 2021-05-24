import React, { useMemo } from "react"
import dynamic from "next/dynamic"

export default function NavBar({
  background = "ui_100",
  containerWidth = "96rem",
  animationPreset = "fadeIn",
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
    case "Avail/RDC": {
      const AvailRdcNavBar = dynamic(() => import("./AvailRdcNavBar"))
      return (
        <AvailRdcNavBar
          background={background}
          menuEntries={links}
          primaryLink={primaryLink}
          secondaryLink={secondaryLink}
          sticky={sticky}
          animationPreset={animationPreset}
          availLogo={availLogo}
          rdcLogo={rdcLogo}
          {...props}
        />
      )
    }
    case "Avail":
    default: {
      const AvailNavBar = dynamic(() => import("./AvailNavBar"))
      return (
        <AvailNavBar
          background={background}
          containerWidth={containerWidth}
          defaultLinks={links}
          primaryLink={primaryLink}
          secondaryLink={secondaryLink}
          sticky={sticky}
          animationPreset={animationPreset}
          availLogo={availLogo}
          {...props}
        />
      )
    }
  }
}
