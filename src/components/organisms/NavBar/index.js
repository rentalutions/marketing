import React, { useMemo } from "react"

import AvailNavBar from "./AvailNavBar"
import AvailRdcNavBar from "./AvailRdcNavBar"

/**
 * @typedef Link
 * @type {object}
 * @property {string} href - a Link href
 * @property {string | undefined} target - Link target property
 */

/**
 * @param background - a background color in the theme format, e.g. - "ui_100" for white
 * @param links - a collection of objects of @type Link
 * @param containerWidth - width in space units to limit Nav Bar width
 * @param type
 * @param primaryButton
 * @param secondaryButton
 * @param sticky - boolean to indicate if NavBar should be sticky. If true - will inject "scroll-padding-top" as global style
 * @param animationPreset - a string to animate the components coming into view
 * @param props - rest of the props
 * @returns {JSX.Element}
 */
export default function NavBar({
  background = "ui_100",
  containerWidth = "96rem",
  animationPreset = "fadeIn",
  type = "Avail",
  sticky,
  primaryButton,
  secondaryButton,
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
          animationPreset={animationPreset}
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
          animationPreset={animationPreset}
          {...props}
        />
      )
  }
}
