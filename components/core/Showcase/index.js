import React, { useEffect, useState } from "react"
import { Box, Col, Container, Flex, Grid } from "@rent_avail/layout"
import Icon from "components/core/Icon"

const Showcase = ({
  copy,
  image = {},
  cases,
  caseInterval,
  containerWidth,
  flip,
  ...props
}) => {
  const [activeCase, setActiveCase] = useState(0)
  useEffect(() => {
    if (caseInterval) {
      const timeout = setTimeout(() => {
        const nextInterval = activeCase + 1
        setActiveCase(nextInterval < cases.length ? nextInterval : 0)
      }, caseInterval)
      return () => {
        clearInterval(timeout)
      }
    }
  }, [cases, activeCase, setActiveCase])
  return (
    <Box {...props}>
      <Container {...(containerWidth && { maxWidth: containerWidth })}>
        <Grid
          alignItems="center"
          justifyItems="center"
          gridAutoFlow="row dense"
        >
          <Col gridColumn={["span 12", "span 12", "span 7"]}>
            <Box>{copy}</Box>
            <Flex
              justifyContent="space-between"
              m="2rem 0 3rem"
              minHeight="4.5rem"
            >
              {cases.map(({ icon }, idx) => (
                <Box
                  color={idx === activeCase ? "blue_500" : "ui_500"}
                  sx={{
                    transition: "color 500ms ease-in-out",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveCase(idx)}
                  key={`${icon}-${idx}`}
                >
                  <Icon name={icon} width="48px" height="48px" />
                </Box>
              ))}
            </Flex>
            {cases && cases[activeCase] && cases[activeCase].copy && (
              <Box minHeight="4rem" textAlign="center">
                {cases[activeCase].copy}
              </Box>
            )}
          </Col>
          <Col
            gridColumn={["span 12", "span 12", "span 5"]}
            order={flip ? -1 : 1}
          >
            <Box
              as="img"
              src={image.url}
              alt={image.alt}
              title={image.alt}
              maxWidth="22rem"
            />
          </Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default Showcase
