import React from "react"
import { Container } from "@rent_avail/layout"
import EmailCapture from "components/organisms/EmailCapture"
import RichText from "components/partials/SliceZone/components/RichText"
import Anchor from "components/elements/Anchor"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"
import { useQuery } from "@apollo/client"
import { GET_ANALYTICS_QUERY } from "graphql/queries"

const EmailCaptureSlice = ({ slice }) => {
  const {
    primary: { title, hash, label, buttonText },
  } = slice

  const urlResolver = useUrlResolver()

  const inputLabelId = useUID()

  const { data, loading, error } = useQuery(GET_ANALYTICS_QUERY)

  console.log(data, loading, error)

  return (
    <Container maxWidth={CONTAINER_WIDTHS} my="6rem">
      {hash && <Anchor hash={hash} />}
      <Container maxWidth="66rem" px="0">
        <EmailCapture
          title={
            <RichText
              textAlign={["left", "center"]}
              color="blue_500"
              render={title}
            />
          }
          inputLabel={label}
          inputLabelId={inputLabelId}
          buttonText={buttonText}
          buttonUrl={urlResolver("https://www.avail.co/users/new")}
          queryParamName="email"
        />
      </Container>
    </Container>
  )
}

export default EmailCaptureSlice
