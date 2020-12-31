import { Box, Col, Flex } from "@rent_avail/layout"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import { Text } from "@rent_avail/typography"
import * as React from "react"
import { getTargetProps } from "utils/link"
import { Typography } from "config"

export function PitchCard({ title, description, icon = null, link, ...props }) {
  return (
    <Col {...props} display="flex" flexDirection="column">
      {icon?.url && (
        <Box
          as="img"
          src={icon.url}
          alt={icon.alt}
          title={icon.alt}
          width="10rem"
        />
      )}
      {title &&
        React.cloneElement(title, {
          sx: {
            ...(link?.button ? Typography.H3 : Typography.H5),
            ...title.props?.sx,
            marginBottom: link?.button ? "2rem" : "1rem",
          },
        })}
      {description && (
        <Box flex={link?.button ? "1 1 auto" : "initial"}>{description}</Box>
      )}
      {link && (
        <Flex
          mt={link.button ? "3rem" : "1.5rem"}
          justifyContent={link.button ? "center" : "flex-start"}
        >
          <Link href={link.url} passHref>
            {link.button ? (
              <Button as="a" {...getTargetProps(link.target)}>
                {link.text}
              </Button>
            ) : (
              <Text as="a" {...getTargetProps(link.target)} color="blue_700">
                {link.text}
              </Text>
            )}
          </Link>
        </Flex>
      )}
    </Col>
  )
}
