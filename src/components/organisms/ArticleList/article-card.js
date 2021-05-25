import React, { cloneElement, memo } from "react"
import NextLink from "next/link"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import Card from "components/elements/Card"

function ArticleCard({
  bg,
  link: Link,
  image,
  title,
  content,
  action,
  ...props
}) {
  const HandledLink = memo((linkProps) =>
    typeof Link === "function" ? (
      <Link {...linkProps} />
    ) : (
      <NextLink passHref href={Link.href} {...linkProps} />
    )
  )
  const Image = memo(({ url, alt, ...imageProps }) => (
    <HandledLink>
      <Box as="a" width="100%" height="50%" maxHeight="16rem" {...imageProps}>
        <Box
          as="img"
          src={url}
          alt={alt}
          title={alt}
          height="100%"
          maxWidth="100%"
        />
      </Box>
    </HandledLink>
  ))

  return (
    <Card
      bg={bg}
      sx={{
        overflow: "auto",
        padding: "0",
        border: "none",
        boxShadow: "none",
        gap: "0",
      }}
      {...props}
    >
      {image && <Image {...image} />}
      <Box
        height="100%"
        width="100%"
        p="2rem"
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "flex-start",
        }}
      >
        {title && (
          <Box
            bg="green_500"
            width="fit-content"
            mb="0.5rem"
            px="1rem"
            borderRadius="1rem"
          >
            {title}
          </Box>
        )}
        {cloneElement(content, {
          flex: 1,
          mb: "0.5rem",
          sx: {
            textAlign: "left",
            ...content.props?.sx,
          },
        })}
        {action && (
          <HandledLink>
            {action.type === "button" ? (
              <Button background={bg} forwardAs="Box" as="a">
                {action.label}
              </Button>
            ) : (
              <a className="link">{action.label}</a>
            )}
          </HandledLink>
        )}
      </Box>
    </Card>
  )
}

export default ArticleCard
