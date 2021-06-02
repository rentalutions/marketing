import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Container, Box, Grid, Col, Stack } from "@rent_avail/layout"
import SkewBox from "components/molecules/SkewBox"
import Video from "components/elements/Video"
import { STYLING } from "config"

function Hero({
  bg,
  skew = "right",
  stretch = true,
  description,
  title,
  image = null,
  imagePosition = "right",
  video,
  embed,
  primaryLink,
  secondaryLink,
  containerWidth,
  animationPreset = "fadeIn",
  children,
  ...props
}) {
  const links = primaryLink || secondaryLink
  const hasVideo = !!(video?.url || embed)
  const hasTwoCols = !!image || hasVideo

  const [presets, intersectionView] = useInViewAnimation({ delayChildren: 0 })
  const animation = presets[animationPreset]

  const secondCol = (
    <Col
      span={[12, 12, 12, 6]}
      gridRow={["1", "1", "1", "auto"]}
      order={imagePosition === "left" ? -1 : 1}
      sx={{ textAlign: "center" }}
    >
      <Box
        as={motion.aside}
        {...animation?.item}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {!!image && (
          <Box sx={{ maxWidth: ["100%", "50%", "50%", "100%"], flex: "1 0" }}>
            {image}
          </Box>
        )}
        {!!video?.url && <Video src={video?.url} />}
        {!!embed && <Box sx={{ flex: "1 0" }}>{embed}</Box>}
      </Box>
    </Col>
  )

  return (
    <SkewBox
      {...props}
      as={motion.aside}
      {...animation?.container}
      bg={bg}
      skew={skew}
    >
      <Container
        ref={intersectionView}
        as={Grid}
        minHeight={stretch && "calc(90vh - 14rem)"}
        py={skew === "none" && !stretch && "2rem"}
        alignItems="center"
        gap={["2rem", "2rem", "4rem"]}
        {...(containerWidth ? { maxWidth: containerWidth } : null)}
      >
        {hasTwoCols && imagePosition === "left" && secondCol}
        <Col span={hasTwoCols ? [12, 12, 12, 6] : [12]}>
          <motion.aside {...animation?.item}>
            {cloneElement(title, {
              sx: {
                ...(hasTwoCols ? STYLING.headline : STYLING.hero),
                fontWeight: ["regular", "light"],
                ...title.props?.sx,
              },
            })}
          </motion.aside>
          <Box as={motion.aside} {...animation?.item} mt="2rem">
            {description}
          </Box>
          {links && (
            <Stack
              as={motion.aside}
              {...animation?.item}
              wrapChildren
              direction={["column", "row"]}
              mt="2rem"
            >
              {primaryLink}
              {secondaryLink}
            </Stack>
          )}
          <motion.aside {...animation?.item}>{children}</motion.aside>
        </Col>
        {hasTwoCols && imagePosition !== "left" && secondCol}
      </Container>
    </SkewBox>
  )
}

export { Hero }
