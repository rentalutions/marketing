import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { variant } from "styled-system"
import { useInViewAnimation } from "utils/animation"
import { Box, Container, Grid } from "@rent_avail/layout"
import SkewBox from "components/molecules/SkewBox"
import { STYLING } from "config"
import PlanCard from "./plan-card"

const PlansGrid = styled(Grid)(
  variant({
    prop: "direction",
    variants: {
      vertical: {
        gridTemplateColumns: "1fr",
        maxWidth: ["unset", "unset", "100%", "100%", "54rem"],
        mx: "auto",
      },
      horizontal: {
        gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 30rem))",
        justifyContent: "flex-start",
      },
    },
  })
)

function PlansPrices({
  bg,
  direction = "vertical",
  title,
  subtitle,
  link,
  plans,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <SkewBox bg={bg} {...props}>
      <Container
        as={motion.aside}
        {...animation?.container}
        ref={intersectionView}
        maxWidth={containerWidth}
        py="6rem"
      >
        <Box textAlign="left">
          {(title || subtitle) && (
            <motion.aside {...animation?.item}>
              {title &&
                cloneElement(title, {
                  mb: "1rem",
                  sx: {
                    ...STYLING.headline,
                    ...title.props?.sx,
                  },
                })}
              {subtitle &&
                cloneElement(subtitle, {
                  mb: "1rem",
                  sx: {
                    ...STYLING.subtitle,
                    ...subtitle.props?.sx,
                  },
                })}
            </motion.aside>
          )}
          <PlansGrid direction={direction} gap="2rem" my="2rem">
            {plans.map((plan) => (
              <PlanCard
                direction={direction}
                animationPreset={animationPreset}
                shadow={!!plan.specialOffer}
                key={plan.title}
                {...plan}
              />
            ))}
          </PlansGrid>
          {link && <motion.aside {...animation?.item}>{link}</motion.aside>}
        </Box>
      </Container>
    </SkewBox>
  )
}

export { PlansPrices }
