import React from "react"
import styled from "styled-components"
import {
  Award,
  Box as BoxIcon,
  Circle,
  Check,
  CheckCircle,
  Gift,
  Minus,
} from "react-feather"
import { STYLING } from "config"
import { Text } from "../Text"
import Tag from "@rent_avail/tag"

function getLabelProps(label) {
  return STYLING[label] && { sx: { ...STYLING[label] } }
}

const StyledIcon = styled.div({
  marginRight: ({ size }) => `calc(2.3334rem - ${size})`,
  verticalAlign: "middle",
})
const StyledSpan = styled.span({
  verticalAlign: "middle",
})

const IconLabel = ({ icon: Icon, children, ...props }) => (
  <React.Fragment>
    <StyledIcon as={Icon} size="1.3334rem" {...props} />
    <StyledSpan>{children}</StyledSpan>
  </React.Fragment>
)

export const CustomLabel = ({ label, children, ...props }) => {
  switch (label) {
    case "icon__award":
      return <IconLabel icon={Award}>{children}</IconLabel>
    case "icon__box":
      return <IconLabel icon={BoxIcon}>{children}</IconLabel>
    case "icon__bullet":
      return (
        <IconLabel icon={Circle} size="0.8rem" fill="currentColor">
          {children}
        </IconLabel>
      )
    case "icon__checkmark":
      return <IconLabel icon={Check}>{children}</IconLabel>
    case "icon__checkcircle":
      return <IconLabel icon={CheckCircle}>{children}</IconLabel>
    case "icon__dash":
      return <IconLabel icon={Minus}>{children}</IconLabel>
    case "icon__gift":
      return <IconLabel icon={Gift}>{children}</IconLabel>
    case "tag":
      return <Tag mr="1rem" bg="green_500" color="ui_900">{children}</Tag>
    default:
      return React.createElement(
        Text,
        {
          as: "span",
          ...props,
          ...getLabelProps(label),
        },
        children
      )
  }
}
