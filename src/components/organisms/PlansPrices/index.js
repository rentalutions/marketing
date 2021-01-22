import React, { cloneElement } from "react"
import styled from "styled-components"
import { variant } from "styled-system"

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

const PlanCard = styled(Flex)(
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
  ...props
}) {
  return (
    <SkewBox bg={bg} {...props}>
      <Container maxWidth={containerWidth} py="6rem">
        <Box textAlign="center">
          {title &&
            cloneElement(title, {
              mb: "1rem",
              sx: {
                ...title.props?.sx,
                ...STYLING.headline,
              },
            })}
          {subtitle &&
            cloneElement(subtitle, {
              mb: "1rem",
              sx: {
                ...subtitle.props?.sx,
                ...STYLING.subtitle,
              },
            })}
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
                  key={planTitle}
                  flex="auto"
                  bg={background}
                  color={color}
                  border="none"
                >
                  <PlanCard direction={direction}>
                    <PlanInfo
                      flex={1}
                      image={image}
                      title={planTitle}
                      price={price}
                      subtext={subtext}
                      description={description}
                    />
                    <Flex flex={1} flexDirection="column" sx={{ gap: "2rem" }}>
                      <Box textAlign="left">
                        {typeof Features === "function" ? (
                          <Features />
                        ) : (
                          Features
                        )}
                      </Box>
                      <Box mt="auto">
                        {button &&
                          cloneElement(button, {
                            display: "block",
                            color: buttonColor,
                            backgroundColor: buttonBackground,
                            borderColor: buttonBackground,
                          })}
                      </Box>
                    </Flex>
                  </PlanCard>
                </Card>
              )
            )}
          </PlansGrid>
          {link}
        </Box>
      </Container>
    </SkewBox>
  )
}

export { PlansPrices }
