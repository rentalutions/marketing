import React from "react"
import { BigNumbers } from "../SocialProof"

export default { title: "Social Proof" }

export function BigNumbersDefault() {
  return (
    <BigNumbers
      mt="4rem"
      numbers={[{ title: "Landlords Managing With Avail", number: 150_000 }]}
    />
  )
}
