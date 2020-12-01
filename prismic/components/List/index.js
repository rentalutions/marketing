import React from "react"
import styled from "styled-components"
import { Check } from "react-feather"

const StyledCheck = styled(Check)`
  margin: 0 1rem 0 0;
  vertical-align: middle;
`

const StyledSpan = styled.span`
  vertical-align: middle;
`

export const ListItem = ({ children }) => {
  return (
    <li>
      <StyledCheck size="1.3334rem" />
      <StyledSpan>{children}</StyledSpan>
    </li>
  )
}

export const List = styled.ul`
  list-style: none;
`
