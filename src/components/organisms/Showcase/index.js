import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInViewAnimation } from "utils/animation"
import { Box, Col, Container, Flex, Grid } from "@rent_avail/layout"
import Icon from "components/elements/Icon"

const Showcase = ({
  copy,
  image,
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

  const imageCol = image && (
    <Col gridColumn={["span 12", "span 12", "span 5"]}>
      <motion.aside {...animation?.item}>
        <Box
          as="img"
          src={image.url}
          alt={image.alt}
          title={image.alt}
          maxWidth="22rem"
        />
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
          <Col
            gridColumn={image ? ["span 12", "span 12", "span 7"] : "span 12"}
          >
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
                  key={copy}
                  color={idx === activeCase ? "blue_500" : "ui_500"}
                  sx={{
                    transition: "color 500ms ease-in-out",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveCase(idx)}
                >
                  <Icon name={icon} width="48px" height="48px" />
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
