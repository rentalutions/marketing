import { Box, Col, Flex } from "@rent_avail/layout"
import Link from "next/link"
import { Button } from "@rent_avail/controls"
import { Text } from "@rent_avail/typography"
import * as React from "react"
import { getTargetProps } from "utils/link"
import { STYLING } from "config"

export function PitchCard({ title, description, icon = null, link, ...props }) {
  const isButtonVariant = !!link?.button
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
            ...(isButtonVariant ? STYLING.title : STYLING.body__emphasis),
            ...title.props?.sx,
            marginBottom: isButtonVariant ? "2rem" : "1rem",
          },
        })}
      {description && (
        <Box flex={isButtonVariant ? "1 1 auto" : "initial"}>{description}</Box>
      )}
      {link && (
        <Flex
          mt={isButtonVariant ? "3rem" : "1.5rem"}
          justifyContent={isButtonVariant ? "center" : "flex-start"}
        >
          <Link href={link.url} passHref>
            {isButtonVariant ? (
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
