import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import { Box, Container } from "@rent_avail/layout"
import { useInViewAnimation } from "utils/animation"
import { STYLING } from "config"
import DoubleQuotes from "./double-quotes"

function Blockquote({
  content,
  quoteColor = "green_100",
  textColor = "blue_500",
  textAlign = "left",
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <Box as={motion.aside} {...animation?.container} {...props}>
      <Container ref={intersectionView} maxWidth={containerWidth} py="6rem">
        <Box
          sx={{
            position: "absolute",
            marginLeft: "2rem",
            width: "7rem",
          }}
        >
          <DoubleQuotes fill={quoteColor} />
        </Box>
        {content && (
          <Box as={motion.aside} {...animation?.item} sx={{ textAlign }}>
            {cloneElement(content, {
              sx: {
                color: textColor,
                ...content.props?.sx,
                ...STYLING.headline,
              },
            })}
          </Box>
        )}
      </Container>
    </Box>
  )
}

export { Blockquote }
