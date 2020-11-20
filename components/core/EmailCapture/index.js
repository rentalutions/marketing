import React, { useState } from "react"
import Input from "@rent_avail/input"
import { Box } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import { analyzeColor } from "lib/utils"
import { ContrastButtonPrimary } from "components/core/ContrastButton"

const EmailCapture = ({
  background,
  inputLabel,
  buttonText,
  buttonUrl,
  queryParamName,
}) => {
  const [inputValue, setInputValue] = useState("")
  const [scheme, isDark] = background ? analyzeColor(background) : []
  const buttonHref = `${buttonUrl}${
    queryParamName && inputValue ? `?${queryParamName}=${inputValue}` : ""
  }`
  return (
    <Box position="relative">
      <Input
        label={inputLabel}
        sx={{
          color: isDark ? "ui_300" : "ui_900",
          "&:focus-within": {
            borderColor: isDark ? "ui_100" : "blue_500",
            color: isDark ? "ui_100" : "blue_500",
          },
          "&.filled:not(:focus-within):not(.error) .input__label-row": {
            color: isDark ? "ui_300" : "ui_700",
          },
          "& > input": {
            height: "calc(6.5rem - 2px)",
          },
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Box
        position={["static", "absolute"]}
        mt={["1.5rem", 0]}
        top="calc(1rem + 2px)"
        right="1rem"
      >
        {isDark ? (
          <ContrastButtonPrimary
            scheme={scheme}
            forwardedAs="a"
            href={buttonHref}
            display="block"
            textAlign="center"
          >
            {buttonText}
          </ContrastButtonPrimary>
        ) : (
          <Button
            variant="primary"
            as="a"
            href={buttonHref}
            display="block"
            textAlign="center"
          >
            {buttonText}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default EmailCapture
