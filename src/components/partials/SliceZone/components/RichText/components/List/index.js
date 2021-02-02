import React from "react"
import styled from "styled-components"
import { Check } from "react-feather"

export const List = styled.ul`
  list-style: none;
  & > li {
    margin-bottom: 0.5rem;
  }
`

export const OList = styled.ol`
  list-style-position: inside;
  & > li {
    margin-bottom: 0.5rem;
  }
`

const StyledCheck = styled(Check)`
  margin: 0 1rem 0 0;
  vertical-align: middle;
`

const StyledSpan = styled.span`
  vertical-align: middle;
`

export const ListItem = ({ children }) => (
  <li>
    <StyledCheck size="1.3334rem" />
    <StyledSpan>{children}</StyledSpan>
  </li>
)
