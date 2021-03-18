import React, { useEffect, useRef, useState } from "react"
import Input from "@rent_avail/input"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import { analyzeColor } from "utils/color-scheme"

const EmailCaptureInput = ({
  background,
  inputLabel,
  inputLabelId,
  buttonText,
  buttonUrl,
  onSubmit,
  queryParamName,
}) => {
  const buttonRef = useRef()
  const [buttonWidth, setButtonWidth] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [, isDark] = background ? analyzeColor(background) : []

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = new URL(buttonUrl)
    if (queryParamName && inputValue) {
      url.searchParams.append(queryParamName, inputValue)
    }
    if (onSubmit) {
      await onSubmit({ email: inputValue })
    }
    window.location.href = url.toString()
  }

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth)
    }
  }, [buttonRef.current])

  return (
    <Box as="form" position="relative" onSubmit={handleSubmit}>
      <Input
        label={inputLabel}
        labelId={inputLabelId}
        sx={{
          "& > label": {
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
              paddingRight: ["2rem", `calc(2rem + ${buttonWidth}px)`],
            },
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
        ref={buttonRef}
      >
        <Button
          background={background}
          variant="primary"
          type="submit"
          display="block"
          textAlign="center"
          width="100%"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default EmailCaptureInput
