import React from "react"
import { Box } from "@rent_avail/layout"

function SkewBox({ bg, skew = "none", children, sx, ...props }) {
  return skew !== "none" ? (
    <Box
      {...props}
      sx={{
        position: "relative",
        pb: "calc(100vw * 0.06)", // 0.06 is a static approximation based on 4deg skew angle
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: bg || "transparent",
          transform: `skewY(${skew === "right" ? 4 : -4}deg)`,
          transformOrigin: `top ${skew}`,
        }}
      />
      <Box sx={{ position: "relative" }}>{children}</Box>
    </Box>
  ) : (
    <Box {...props} sx={{ bg, ...sx }}>
      {children}
    </Box>
  )
}

export default SkewBox
