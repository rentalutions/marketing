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
    pushIndex,
  ] = useMemo(() => {
    function createLink(id, { text, link, hash }) {
      return {
        id,
        text,
        href: hash ? `#${hash.replace(/^#/, "")}` : link?.url,
        target: link?.target,
        push: true,
      }
    }

    const { _defaultLinks, _menuEntries, _primaryLink } = links.reduce(
      (acc, current) => {
        acc._menuEntries.push(current)
        if (!acc._primaryLink && current.primary) {
          acc._primaryLink = current
        } else {
          acc._defaultLinks.push(current)
        }
        return acc
      },
      {
        _defaultLinks: [],
        _menuEntries: [],
        _primaryLink:
          primaryButton && createLink("nav-primary-bt", primaryButton),
      }
    )

    const _secondaryLink =
      secondaryButton && createLink("nav-secondary-bt", secondaryButton)

    if (_secondaryLink) {
      _defaultLinks.push(_secondaryLink)
    }

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

    return [
      _defaultLinks,
      _menuEntries,
      _primaryLink,
      _secondaryLink,
      _pushIndex,
    ]
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
          pushIndex={pushIndex}
          sticky={sticky}
          animationPreset={animationPreset}
          {...props}
        />
      )
  }
}
