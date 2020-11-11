import React from "react"
import { Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { useRouter } from "next/router"

const PreviewWarning = () => {
  const router = useRouter()
  return (
    <Flex
      textAlign="center"
      backgroundColor="red_500"
      justifyContent="center"
      alignItems="center"
      color="white"
      py="0.3rem"
    >
      <Text
        fontSize="1.5rem"
        fontWeight="800"
        as="a"
        href={`/api/exit-preview?redirectUrl=${router.pathname}`}
      >
        Exit preview mode
      </Text>
    </Flex>
  )
}

export default PreviewWarning
