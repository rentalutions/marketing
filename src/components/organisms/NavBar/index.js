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
  type = "Avail",
  background = "ui_100",
  links = [],
  containerWidth = "96rem",
  sticky,
  animationPreset = "fadeIn",
  ...props
}) {
  const [defaultLinks, primaryLink, pushIndex] = useMemo(() => {
    /** Clone links, since we are going to perform some dirty mutations */
    const _defaultLinks = [...links]

    /** Find and remove the primary link from the default links using mutating .splice.
     * NB: Only the first link with { primary: true } would be treated as such, -
     * the rest would be considered default links */
    const primaryLinkIndex = _defaultLinks.findIndex(({ primary }) => primary)
    const [_primaryLink] =
      primaryLinkIndex !== -1 ? _defaultLinks.splice(primaryLinkIndex, 1) : []

    /** Check if links contain { push: true }. If so, - we will render the default links as "row-reverse",
     * because the expectation would be that links with { push: true } disappear last on smaller devices.
     * To achieve that, we will sort the links so that the ones with { push: true } are at the head of the array
     * and then reverse the array. We will also recalculate "pushIndex" as the last index in this case,
     * in order to inject "margin-left: auto" at the correct link */
    let _pushIndex = _defaultLinks.findIndex(({ push }) => push)
    if (_pushIndex !== -1) {
      _defaultLinks.sort(({ push: a }, { push: b }) => {
        if (a === b) return 0
        return a ? 1 : -1
      })

      _defaultLinks.reverse()

      _pushIndex = _defaultLinks.reduce(
        (r, { push }, idx) => (push ? idx : r),
        -1
      )
    }

    return [_defaultLinks, _primaryLink, _pushIndex]
  }, [links])

  switch (type) {
    case "Avail/RDC":
      return (
        <AvailRdcNavBar
          background={background}
          defaultLinks={defaultLinks}
          primaryLink={primaryLink}
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
          pushIndex={pushIndex}
          sticky={sticky}
          animationPreset={animationPreset}
          {...props}
        />
      )
  }
}
