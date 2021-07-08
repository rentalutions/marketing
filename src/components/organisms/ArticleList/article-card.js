import React, { cloneElement, forwardRef } from "react"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import Card from "components/elements/Card"
import { STYLING } from "config"
import Tag from "@rent_avail/tag"
import ArticleLink from "./article-link"

const ButtonLink = forwardRef((props, ref) => (
  <Button as="a" ref={ref} {...props} />
))

function ArticleCard({
  bg = "ui_100",
  tag,
  title,
  content,
  image,
  link,
  linkType,
  linkLabel,
  sx,
  ...props
}) {
  return (
    <Card
      bg={bg}
      sx={{
        overflow: "auto",
        padding: "0",
        border: "none",
        gap: "0",
        ...sx,
      }}
      {...props}
    >
      {image?.element && (
        <Box
          sx={{
            bg: image.bg || "blue_100",
            maxHeight: "18rem",
            width: "100%",
            "& img": {
              maxHeight: "18rem",
            },
          }}
        >
          <ArticleLink link={link} display="block">
            {image.element}
          </ArticleLink>
        </Box>
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
          <Box as={Tag} bg="green_500" sx={{ mb: "0.667rem" }}>
            {tag}
          </Box>
        )}
        {title &&
          cloneElement(title, {
            mb: "0.667rem",
            sx: {
              textAlign: "left",
              ...STYLING.body__emphasis,
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
        {linkType && linkLabel && (
          <React.Fragment>
            {linkType === "button" ? (
              <ArticleLink link={link} background={bg} as={ButtonLink}>
                {linkLabel}
              </ArticleLink>
            ) : (
              <ArticleLink link={link} className="link">
                {linkLabel}
              </ArticleLink>
            )}
          </React.Fragment>
        )}
      </Box>
    </Card>
  )
}

export default ArticleCard
