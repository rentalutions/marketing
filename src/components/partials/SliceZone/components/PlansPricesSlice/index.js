import React from "react"
import Button from "components/elements/Button"
import { PlansPrices } from "components/organisms/PlansPrices"
import RichText from "components/partials/SliceZone/components/RichText"
import Link from "components/partials/SliceZone/components/Link"
import { CONTAINER_WIDTHS } from "config"

const PlansPricesSlice = ({ slice }) => {
  const {
    primary: {
      title,
      subtitle,
      link,
      linkText,
      background,
      color,
      skew = "none",
      direction = "horizontal",
    },
  } = slice

  const plans = slice.items.map(
    ({
      features,
      buttonText,
      buttonLink,
      buttonColor,
      buttonBackground,
      buttonIsPrimary,
      background: cardBackground,
      ...props
    }) => ({
      ...props,
      background: cardBackground,
      features: features && <RichText render={features} />,
      button: buttonText && buttonLink && (
        <Link link={buttonLink}>
          <Button
            forwardedAs="a"
            variant={buttonIsPrimary ? "primary" : "default"}
            background={cardBackground}
          >
            {buttonText}
          </Button>
        </Link>
      ),
    })
  )

  return (
    <PlansPrices
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      skew={skew}
      direction={direction}
      title={title && <RichText render={title} />}
      subtitle={subtitle && <RichText render={subtitle} />}
      link={
        linkText &&
        link && (
          <Link link={link}>
            <a className="link">{linkText}</a>
          </Link>
        )
      }
      plans={plans}
    />
  )
}

export default PlansPricesSlice
