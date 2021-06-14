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
        maxWidth: ["unset", "unset", "75%", "75%", "54rem"],
        mx: "auto",
      },
      horizontal: {
        gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 30rem))",
        justifyContent: "center",
      },
    },
  })
)

const TextGrid = styled(Grid)(
  variant({
    prop: "direction",
    variants: {
      vertical: {
        gridTemplateColumns: "1fr",
        maxWidth: ["unset", "unset", "75%", "75%", "54rem"],
        mx: "auto",
      },
      horizontal: {
        gridTemplateColumns: "1fr",
        maxWidth: ["unset", "unset", "75%", "75%", "61rem"],
        mx: "auto",
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
          <TextGrid direction={direction}>
            {title && (
              <motion.aside {...animation?.item}>
                {cloneElement(title, {
                  mb: "1rem",
                  sx: {
                    ...STYLING.headline,
                    ...title.props?.sx,
                  },
                })}
              </motion.aside>
            )}
            {subtitle && (
              <motion.aside {...animation?.item}>
                {cloneElement(subtitle, {
                  mb: "1rem",
                  sx: {
                    ...STYLING.subtitle,
                    ...subtitle.props?.sx,
                  },
                })}
              </motion.aside>
            )}
          </TextGrid>
          <PlansGrid direction={direction} gap="2rem" my="2rem">
            {plans.map((plan) => (
              <PlanCard
                direction={direction}
                animationPreset={animationPreset}
                shadow={plan.specialOffer}
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
