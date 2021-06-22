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
  component,
  image = null,
  imagePosition = "right",
  video,
  embed,
  primaryLink,
  secondaryLink,
  containerWidth,
  animationPreset = "fadeIn",
  children,
  imageBackground = "No",
  contentSize = '50%',
  resizeImage = "No",
  backgroundEffect = "No",
  ...props
}) {
  const links = primaryLink || secondaryLink
  const hasVideo = !!(video?.url || embed)
  const hasTwoCols = !!image || hasVideo

  const [presets, intersectionView] = useInViewAnimation({ delayChildren: 0 })
  const animation = presets[animationPreset]

  const effect = (backgroundEffect === 'Yes') ? "linear-gradient(to top, #fff 10%, rgba(255,255,255,0)),linear-gradient(to right, #fff 15%, rgba(255,255,255,0))," : ""
  const isBackground = (image && imageBackground === 'Yes')
  const resize = (image && resizeImage === 'Yes')
  let sizeLeft = 6
  let sizeRight = 6

  switch (contentSize) {
    case '25%':
      sizeLeft = 4
      sizeRight = 8
    break
    case '75%':
      sizeLeft = 8
      sizeRight = 4
    break
  }

  const secondCol = (
    <Col
      span={[12, 12, 12, sizeRight]}
      gridRow={["1", "1", "1", "auto"]}
      order={imagePosition === "left" ? -1 : 1}
      sx={{ textAlign: "center" }}
    >
      {!isBackground && (<Box
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
      </Box>)}
    </Col>
  )

  return (
    <SkewBox
      {...props}
      as={motion.aside}
      {...animation?.container}
      bg={bg}
      skew={skew}
      sx={{
        backgroundImage: (!!image && isBackground) ? `${effect} url(${image.props.src})` : "none", 
        backgroundPosition: "top calc((0vh - 2rem) * -0.15) right 0",  
        backgroundSize: "900px", 
        backgroundRepeat: "no-repeat"
      }}
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
        <Col span={hasTwoCols ? [12, 12, 12, sizeLeft] : [12]}>
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
