import React, { cloneElement } from "react"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import Card from "components/elements/Card"
import { STYLING } from "config"
import ArticleLink from "./article-link"

function ArticleCard({
  bg,
  tag,
  title,
  content,
  action,
  image,
  link,
  ...props
}) {
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
      {image?.element && (
        <ArticleLink link={link}>
          <Box
            as="a"
            width="100%"
            height="50%"
            maxHeight="16rem"
            bg={image.bg}
            sx={{
              "& *": {
                height: "100%",
                width: "auto",
              },
            }}
          >
            {image.element}
          </Box>
        </ArticleLink>
      )}
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
        {tag && (
          <Box
            bg="green_500"
            width="fit-content"
            mb="0.667rem"
            px="1rem"
            borderRadius="1rem"
          >
            {tag}
          </Box>
        )}
        {title &&
          cloneElement(title, {
            mb: "0.667rem",
            sx: {
              textAlign: "left",
              ...STYLING.subtitle,
              ...title.props?.sx,
            },
          })}
        {cloneElement(content, {
          flex: 1,
          mb: "0.667rem",
          sx: {
            textAlign: "left",
            ...content.props?.sx,
          },
        })}
        {action && (
          <ArticleLink link={link}>
            {action.type === "button" ? (
              <Button background={bg} forwardAs="Box" as="a">
                {action.label}
              </Button>
            ) : (
              <a className="link">{action.label}</a>
            )}
          </ArticleLink>
        )}
      </Box>
    </Card>
  )
}

export default ArticleCard
