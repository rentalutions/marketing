import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { useInViewAnimation } from "components/@rent_avail/utils"
import { Container, Box, Grid, Col, Stack } from "@rent_avail/layout"

import { STYLING } from "config"

const HeroWrapper = styled(Box)`
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

function Hero({
  bg,
  skew = "right",
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
  const hasImage = !!image?.url
  const hasTwoCols = hasImage || hasVideo

  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <HeroWrapper
      {...props}
      ref={intersectionView}
      skewBg={bg}
      skew={skew}
      pt="4rem"
      pb="10rem"
    >
      <div className="skew" />
      <Container
        as={Grid}
        minHeight="calc(90vh - 14rem)"
        alignItems="center"
        gap={["2rem", "2rem", "4rem"]}
        {...(containerWidth ? { maxWidth: containerWidth } : null)}
      >
        <Col span={hasTwoCols ? [12, 12, 12, 6] : [12]}>
          <motion.aside {...animation}>
            {cloneElement(title, {
              sx: {
                ...(hasTwoCols ? STYLING.headline : STYLING.hero),
                fontWeight: ["regular", "light"],
                ...title.props?.sx,
              },
            })}
          </motion.aside>
          <motion.aside
            {...animation}
            transition={{
              ...animation.transition,
              delay: 0.75,
            }}
          >
            <Box mt="2rem">{description}</Box>
          </motion.aside>
          {links && (
            <motion.aside
              {...animation}
              transition={{
                ...animation.transition,
                delay: 1.0,
              }}
            >
              <Stack wrapChildren direction={["column", "row"]} mt="2rem">
                {primaryLink}
                {secondaryLink}
              </Stack>
            </motion.aside>
          )}
          <motion.aside
            {...animation}
            transition={{
              ...animation.transition,
              delay: 1.0,
            }}
          >
            {children}
          </motion.aside>
        </Col>
        {hasTwoCols && (
          <Col
            span={[12, 12, 12, 6]}
            gridRow={["1", "1", "1", "auto"]}
            order={imagePosition === "left" ? -1 : 1}
            sx={{ textAlign: "center" }}
          >
            <motion.aside
              {...animation}
              transition={{
                ...animation.transition,
                delay: 0.25,
                duration: 1.25,
              }}
            >
              {!!image?.url && (
                <Box
                  as="img"
                  src={image.url}
                  alt={image.alt}
                  title={image.alt}
                  maxWidth={["100%", "50%", "50%", "100%"]}
                />
              )}
              {!!video?.url && (
                <Box as="video" width="100%" controls src={video.url} />
              )}
              {!!embed && embed}
            </motion.aside>
          </Col>
        )}
      </Container>
    </HeroWrapper>
  )
}

export { Hero }
