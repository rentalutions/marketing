import React from "react"
import { Box } from "@rent_avail/layout"

function TestimonialsCarouselItem({
  picture,
  altFallback,
  onClick,
  size = "4rem",
  filterColor = "white",
  level = 0,
  sx,
  ...props
}) {
  const [opacity, scale] = (() => {
    if (level >= 3) return [0.9, 0.5625]
    if (level === 2) return [0.75, 0.625]
    if (level === 1) return [0.5, 0.75]
    return [0, 1]
  })()

  return (
    <Box
      position="relative"
      width={size}
      height={size}
      onClick={onClick}
      {...props}
      sx={{
        ...sx,
        width: `${4 * scale}rem`,
        height: `${4 * scale}rem`,
        flex: "none",
      }}
    >
      <Box
        className="pictureChild"
        position="absolute"
        background={filterColor}
        opacity={opacity}
        sx={{
          cursor: "pointer",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: "50%",
        }}
      />
      {picture && (
        <Box
          as="img"
          className="pictureChild"
          src={picture.url}
          alt={picture.alt || altFallback}
          title={picture.alt || altFallback}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        />
      )}
    </Box>
  )
}

export default TestimonialsCarouselItem
