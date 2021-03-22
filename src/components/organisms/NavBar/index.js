import React, { useMemo } from "react"

import AvailNavBar from "./AvailNavBar"
import AvailRdcNavBar from "./AvailRdcNavBar"

/**
 * @typedef Link
 * @type {object}
 * @property {string} href - a Link href
 * @property {string | undefined} target - Link target property
 * @property {boolean | undefined} push - specifies if button should be pushed to the right
 * @property {boolean | undefined} primary - indicates primary button. NB: Only one primary button is supported
 */

/**
 * @param background - a background color in the theme format, e.g. - "ui_100" for white
 * @param links - a collection of objects of @type Link
 * @param containerWidth - width in space units to limit Nav Bar width
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
  const [
    defaultLinks,
    menuEntries,
    primaryLink,
    secondaryLink,
  ] = useMemo(() => {
    function createLink({ id, text, link, hash }) {
      return {
        id,
        text,
        href: hash ? `#${hash.replace(/^#/, "")}` : link?.url,
        target: link?.target,
        push: true,
      }
    }

    const _primaryLink = primaryButton && createLink(primaryButton)
    const _secondaryLink = secondaryButton && createLink(secondaryButton)

    const _menuEntries = links
    const _defaultLinks = links.map((a) => a)

    if (_secondaryLink) {
      _defaultLinks.push(_secondaryLink)
    }

    return [_defaultLinks, _menuEntries, _primaryLink, _secondaryLink]
  }, [links])

  switch (type) {
    case "Avail/RDC":
      return (
        <AvailRdcNavBar
          background={background}
          menuEntries={menuEntries}
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
          defaultLinks={defaultLinks}
          primaryLink={primaryLink}
          sticky={sticky}
          animationPreset={animationPreset}
          {...props}
        />
      )
  }
}
