import React, { useMemo } from "react"
import { Box } from "@rent_avail/layout"
import { theme } from "@rent_avail/base"

export default function HeroBackground({ image, imagePosition, color }) {
  const colorStop = theme.colors[color] || color
  const [gradientSx, imageBoxSx] = useMemo(() => {
    switch (imagePosition) {
      case "background-top-right":
      default: {
        return [
          {
            backgroundImage: [
              `linear-gradient(to top, ${colorStop} 60%, rgba(255,255,255,0)),linear-gradient(to right, ${colorStop}, rgba(255,255,255,0))`,
              `linear-gradient(to top, ${colorStop} 60%, rgba(255,255,255,0)),linear-gradient(to right, ${colorStop}, rgba(255,255,255,0))`,
              `linear-gradient(to top, ${colorStop} 40%, rgba(255,255,255,0)),linear-gradient(to right, ${colorStop} 25%, rgba(255,255,255,0))`,
              `linear-gradient(to top, ${colorStop} 40%, rgba(255,255,255,0)),linear-gradient(to right, ${colorStop} 40%, rgba(255,255,255,0))`,
              `linear-gradient(to top, ${colorStop} 40%, rgba(255,255,255,0)),linear-gradient(to right, ${colorStop} 40%, rgba(255,255,255,0))`,
              `linear-gradient(to top, ${colorStop} 40%, rgba(255,255,255,0)),linear-gradient(to right, ${colorStop} 55%, rgba(255,255,255,0))`,
            ],
          },
          {
            top: "calc((100vh - 2rem) * -0.15)",
            right: ["calc(100vw * -0.1)", "calc(100vw * -0.1)", "0"],
          },
        ]
      }
    }
  }, [imagePosition])
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        "&::after": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...gradientSx,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          ...imageBoxSx,
        }}
      >
        {image}
      </Box>
    </Box>
  )
}
