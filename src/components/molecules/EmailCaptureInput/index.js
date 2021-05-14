import React, { useEffect, useRef, useState } from "react"
import Input from "@rent_avail/input"
import { Box } from "@rent_avail/layout"
import Button from "components/elements/Button"
import { analyzeColor } from "utils/color-scheme"
import styled from "styled-components"
import { Checkbox as AvailCheckbox } from "@rent_avail/controls"
import { sx } from "@rent_avail/base"

const Checkbox = styled(AvailCheckbox)`
  ${sx}
`

const INPUT_ERROR_MESSAGE = "Please enter valid email."

const EmailCaptureInput = ({
  background,
  inputLabel,
  inputLabelId,
  buttonText,
  buttonUrl,
  onSubmit,
  queryParamName,
  optInCopy,
  optInContext,
}) => {
  const buttonRef = useRef()
  const [buttonWidth, setButtonWidth] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [inputError, setInputError] = useState()
  const [optIn, setOptIn] = useState(true)

  const [, isDark] = background ? analyzeColor(background) : []

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue) {
      setInputError(INPUT_ERROR_MESSAGE)
      return
    }
    const url = new URL(buttonUrl)
    if (queryParamName && inputValue) {
      url.searchParams.append(queryParamName, inputValue)
    }
    if (onSubmit && inputValue) {
      await onSubmit({ email: inputValue, optIn, optInContext })
    }
    window.location.href = url.toString()
  }

  const handleInputInvalid = (e) => {
    e.preventDefault()
    setInputError(INPUT_ERROR_MESSAGE)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    setInputError(undefined)
  }

  const handleOptInChange = (e) => {
    setOptIn(e.target.checked)
  }

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth)
    }
  }, [buttonRef.current])

  return (
    <Box as="form" position="relative" onSubmit={handleSubmit}>
      <Input
        type="email"
        label={inputLabel}
        labelId={inputLabelId}
        sx={{
          "& > label": {
            color: isDark ? "ui_300" : "ui_900",
            "&.error": {
              color: isDark ? "ui_300" : "ui_900",
            },
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
        onChange={handleInputChange}
        onInvalid={handleInputInvalid}
        error={inputError}
      />
      <Box
        position={["static", "absolute"]}
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
      {optInCopy && optInContext && (
        <Checkbox
          sx={{
            mt: ["2rem", 0],
            "& input:checked ~ .input__target": {
              borderColor: isDark ? "ui_100" : "blue_500",
            },
          }}
          defaultChecked={optIn}
          onChange={handleOptInChange}
        >
          {optInCopy}
        </Checkbox>
      )}
    </Box>
  )
}

export default EmailCaptureInput
