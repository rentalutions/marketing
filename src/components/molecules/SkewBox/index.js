import React from "react"
import styled from "styled-components"
import { Box } from "@rent_avail/layout"

const Wrapper = styled(Box)`
  position: relative;
  .skew {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme, skewBg }) =>
      skewBg ? theme.colors[skewBg] || skewBg : theme.colors.ui_100};
    z-index: -1;
    transform: skewY(${({ skew }) => (skew === "right" ? 4 : -4)}deg);
    transform-origin: top ${({ skew }) => skew};
  }
`
function SkewBox({ bg, skew = "none", children, ...props }) {
  return skew !== "none" ? (
    <Wrapper {...props} skewBg={bg} skew={skew} pt="4rem" pb="10rem">
      <div className="skew" />
      {children}
    </Wrapper>
  ) : (
    <Box {...props} bg={bg}>
      {children}
    </Box>
  )
}

export default SkewBox
