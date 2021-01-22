import React from "react"
import { Box, Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"

function PlanInfo({ image, title, price, subtext, description, sx, ...props }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      {...props}
      sx={{
        gap: "1rem",
        ...sx,
      }}
    >
      {image && image.url && (
        <Box
          as="img"
          src={image.url}
          alt={image.alt}
          title={image.alt}
          width="70px"
          height="70px"
          borderRadius="50%"
        />
      )}
      {title && <Text fontSize="1.6rem">{title}</Text>}
      {price && <Text fontSize="2.4rem">{price}</Text>}
      {subtext && (
        <Text fontSize="1.2rem" opacity="0.5">
          {subtext}
        </Text>
      )}
      {description && (
        <Text fontSize="1.2rem" fontWeight="800">
          {description}
        </Text>
      )}
    </Flex>
  )
}

export default PlanInfo
