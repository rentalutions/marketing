import React, { cloneElement } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { variant } from "styled-system"

import { useInViewAnimation } from "utils/animation"
import { Box, Card, Container, Flex, Grid } from "@rent_avail/layout"
import SkewBox from "components/molecules/SkewBox"
import { STYLING } from "config"
import PlanInfo from "./plan-info"

const PlansGrid = styled(Grid)(
  variant({
    prop: "direction",
    variants: {
      horizontal: {
        gridTemplateColumns: "1fr",
      },
      vertical: {
        gridTemplateColumns: "repeat(auto-fit, minmax(24rem, 30rem))",
        justifyContent: "center",
      },
    },
  })
)

const PlanContainer = styled(Flex)(
  {
    gap: "2rem",
    "& > *": {
      minHeight: "fit-content",
      minWidth: "fit-content",
    },
  },
  variant({
    prop: "direction",
    variants: {
      horizontal: {
        flexFlow: "row wrap",
        width: "100%",
      },
      vertical: {
        flexFlow: "column wrap",
        height: "100%",
      },
    },
  })
)

function PlansPrices({
  bg,
  direction = "horizontal",
  title,
  subtitle,
  link,
  plans,
  containerWidth,
  animationPreset = "fadeIn",
  ...props
}) {
  const [presets, intersectionView] = useInViewAnimation({ threshold: 0.25 })
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
        <Box textAlign="center">
          {title && (
            <motion.aside {...animation?.item}>
              {cloneElement(title, {
                mb: "1rem",
                sx: {
                  ...title.props?.sx,
                  ...STYLING.headline,
                },
              })}
            </motion.aside>
          )}
          {subtitle && (
            <motion.aside {...animation?.item}>
              {cloneElement(subtitle, {
                mb: "1rem",
                sx: {
                  ...subtitle.props?.sx,
                  ...STYLING.subtitle,
                },
              })}
            </motion.aside>
          )}
          <PlansGrid direction={direction} gap="2rem" my="2rem">
            {plans.map(
              ({
                image,
                title: planTitle,
                price,
                subtext,
                description,
                features: Features,
                button,
                buttonColor,
                buttonBackground,
                background,
                color,
              }) => (
                <Card
                  as={motion.aside}
                  {...animation?.item}
                  flex="auto"
                  bg={background}
                  color={color}
                  border="none"
                  key={planTitle}
                >
                  <PlanContainer
                    as={motion.aside}
                    {...animation?.container}
                    direction={direction}
                  >
                    <PlanInfo
                      as={motion.aside}
                      {...animation?.item}
                      flex={1}
                      image={image}
                      title={planTitle}
                      price={price}
                      subtext={subtext}
                      description={description}
                    />
                    <Flex flex={1} flexDirection="column" sx={{ gap: "2rem" }}>
                      <Box
                        as={motion.aside}
                        {...animation?.item}
                        textAlign="left"
                      >
                        {typeof Features === "function" ? (
                          <Features />
                        ) : (
                          Features
                        )}
                      </Box>
                      <Box as={motion.aside} {...animation?.item} mt="auto">
                        {button &&
                          cloneElement(button, {
                            display: "block",
                            color: buttonColor,
                            backgroundColor: buttonBackground,
                            borderColor: buttonBackground,
                          })}
                      </Box>
                    </Flex>
                  </PlanContainer>
                </Card>
              )
            )}
          </PlansGrid>
          {link && <motion.aside {...animation?.item}>{link}</motion.aside>}
        </Box>
      </Container>
    </SkewBox>
  )
}

export { PlansPrices }
