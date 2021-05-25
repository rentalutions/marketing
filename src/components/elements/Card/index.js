import React from "react"

import { Card as AvailCard } from "@rent_avail/layout"

function Card({ sx, ...props }) {
  return (
    <AvailCard
      {...props}
      sx={{
        width: "26rem",
        display: "flex",
        gap: "1rem",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "12px",
        ...sx,
      }}
    />
  )
}

export default Card
