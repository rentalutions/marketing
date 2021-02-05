import { Box, Col, Flex } from "@rent_avail/layout"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import { Text } from "@rent_avail/typography"
import * as React from "react"
import { getTargetProps } from "utils/link"
import { STYLING } from "config"
import { useInViewAnimation } from "utils/animation"
import { motion } from "framer-motion"

export function PitchCard({
  title,
  description,
  icon = null,
  video,
  embed,
  link,
  animationPreset,
  ...props
}) {
  const [presets, intersectionView] = useInViewAnimation({ threshold: 0.25 })
  const animation = presets[animationPreset]
  const isButtonVariant = !!link?.button
  return (
    <Col
      as={motion.aside}
      {...props}
      display="flex"
      flexDirection="column"
      ref={intersectionView}
      {...animation?.container}
    >
      {icon?.url && (
        <Box
          as={motion.img}
          {...animation?.item}
          src={icon.url}
          alt={icon.alt}
          title={icon.alt}
          width="10rem"
        />
      )}
      {!!video?.url && (
        <motion.aside {...animation?.item}>
          <Box as="video" mb="2rem" width="100%" controls src={video.url} />
        </motion.aside>
      )}
      {!!embed && (
        <motion.aside {...animation?.item}>
          {React.cloneElement(embed, { sx: { mb: "2rem" } })}
        </motion.aside>
      )}
      {title && (
        <motion.aside {...animation?.item}>
          {React.cloneElement(title, {
            sx: {
              ...(isButtonVariant ? STYLING.title : STYLING.body__emphasis),
              ...title.props?.sx,
              marginBottom: isButtonVariant ? "2rem" : "1rem",
            },
          })}
        </motion.aside>
      )}
      {description && (
        <Box
          as={motion.aside}
          {...animation?.item}
          flex={isButtonVariant ? "1 1 auto" : "initial"}
        >
          {description}
        </Box>
      )}
      {link && (
        <Flex
          as={motion.aside}
          {...animation?.item}
          mt={isButtonVariant ? "3rem" : "1.5rem"}
          justifyContent={isButtonVariant ? "center" : "flex-start"}
        >
          <Link href={link.url} passHref>
            {isButtonVariant ? (
              <Button as="a" {...getTargetProps(link.target)}>
                {link.text}
              </Button>
            ) : (
              <Text as="a" {...getTargetProps(link.target)} color="blue_700">
                {link.text}
              </Text>
            )}
          </Link>
        </Flex>
      )}
    </Col>
  )
}
