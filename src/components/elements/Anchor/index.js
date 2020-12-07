import React from "react"
import styled from "styled-components"

const StyledAnchor = styled.a`
  visibility: hidden;
  display: block;
`

const Anchor = ({ hash }) => {
  return <StyledAnchor name={hash} id={hash} />
}

export default Anchor
