import React, { cloneElement } from "react"
import { motion } from "framer-motion"

import { useInViewAnimation } from "utils/animation"
import { Container } from "@rent_avail/layout"

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
        {title &&
          cloneElement(title, {
            as: motion.aside,
            ...animation?.item,
            sx: {
              ...title.props?.sx,
              ...STYLING.title,
            },
          })}
        {description &&
          cloneElement(description, {
            as: motion.aside,
            ...animation?.item,
            sx: {
              ...description.props?.sx,
              ...STYLING.subtitle,
            },
          })}
        <Slider containerRef={containerIntersectionView} mt={2}>
          {articles.map(({ uid, ...article }) => (
            <ArticleCard key={uid} {...article} />
          ))}
        </Slider>
      </Container>
    </SkewBox>
  )
}

export { ArticleList }
