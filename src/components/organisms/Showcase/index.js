import React, { useEffect, useMemo, useState } from "react"
import { m as motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Box, Col, Container, Flex, Grid } from "@rent_avail/layout"
import { Clock, Code, Cpu } from "react-feather"

const ShowcaseIcon = ({ name, ...props }) => {
  const IconComponent = useMemo(() => {
    switch (name) {
      case "Cpu":
        return Cpu
      case "Clock":
        return Clock
      default:
      case "Code":
        return Code
    }
  }, [name])
  return <IconComponent {...props} />
}

const Showcase = ({
  copy,
  image = null,
  cases,
  caseInterval,
  containerWidth,
  flip,
  animationPreset = "fadeIn",
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

  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  const imageCol = !!image && (
    <Col gridColumn={["span 12", "span 12", "span 5"]}>
      <motion.aside {...animation?.item}>
        <Box maxWidth="22rem">{image}</Box>
      </motion.aside>
    </Col>
  )

  return (
    <Box
      as={motion.aside}
      {...animation?.container}
      {...props}
      ref={intersectionView}
    >
      <Container {...(containerWidth && { maxWidth: containerWidth })}>
        <Grid
          alignItems="center"
          justifyItems="center"
          gridAutoFlow="row dense"
        >
          {flip && imageCol}
          <Col gridColumn={["span 12", "span 12", "span 7"]}>
            {copy && (
              <Box as={motion.aside} {...animation?.item}>
                {copy}
              </Box>
            )}

            <Flex
              as={motion.aside}
              {...animation?.item}
              justifyContent="space-between"
              m="2rem 0 3rem"
              minHeight="4.5rem"
            >
              {cases.map(({ icon, copy }, idx) => (
                <Box
                  key={icon}
                  color={idx === activeCase ? "blue_500" : "ui_500"}
                  sx={{
                    transition: "color 500ms ease-in-out",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveCase(idx)}
                >
                  <ShowcaseIcon name={icon} width="48px" height="48px" />
                </Box>
              ))}
            </Flex>
            {cases && cases[activeCase] && cases[activeCase].copy && (
              <Box
                as={motion.aside}
                {...animation?.item}
                minHeight="4rem"
                textAlign="center"
              >
                {cases[activeCase].copy}
              </Box>
            )}
          </Col>
          {!flip && imageCol}
        </Grid>
      </Container>
    </Box>
  )
}

export default Showcase
