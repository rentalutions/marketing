import React, { cloneElement } from "react"
import { motion } from "framer-motion"

import { useInViewAnimation } from "utils/animation"
import { Box, Container } from "@rent_avail/layout"

import SkewBox from "components/molecules/SkewBox"
import Slider from "components/molecules/Slider"

import { STYLING } from "config"

import ArticleCard from "./article-card"

function ArticleList({
  containerWidth,
  animationPreset = "fadeIn",
  title,
  description,
  articles = [],
  ...props
}) {
  const [presets, containerIntersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <SkewBox as={motion.aside} {...animation?.container} {...props}>
      <Container
        ref={containerIntersectionView}
        maxWidth={containerWidth}
        py="6rem"
      >
        {title && (
          <Box mb="2rem">
            {cloneElement(title, {
              as: motion.aside,
              ...animation?.item,
              sx: {
                ...STYLING.headline,
                ...title.props?.sx,
              },
            })}
          </Box>
        )}
        {description && (
          <Box mb="2rem">
            {cloneElement(description, {
              as: motion.aside,
              ...animation?.item,
              sx: {
                ...STYLING.title,
                ...description.props?.sx,
              },
            })}
          </Box>
        )}
        <Slider containerRef={containerIntersectionView}>
          {articles.map(({ uid, ...article }, index) => (
            <ArticleCard key={uid || index} {...article} />
          ))}
        </Slider>
      </Container>
    </SkewBox>
  )
}

export { ArticleList }
