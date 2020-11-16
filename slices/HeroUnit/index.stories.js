import React from "react"
import { storiesOf } from "@storybook/react"
import Component from "."
import model from "./model.json"
import mocks from "./mocks.json"

mocks.forEach((variation) => {
  storiesOf(model.name, Component).add(variation.name, () => (
    <Component slice={variation} />
  ))
})
