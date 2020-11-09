// import { gql } from "@apollo/client"
import { Box, Container } from "@rent_avail/layout"
// import client from "../prismic.config"

// const HOMEPAGE_QUERY = gql`
//   query {
//     homepage(uid: "home", lang: "en-us") {
//       hero
//     }
//   }
// `

// export async function getStaticProps(ctx) {
//   const data = await client.query({ query: HOMEPAGE_QUERY })
//   return {
//     props: { data },
//   }
// }

export default function Home() {
  return (
    <Box as="main">
      <Container sx={{ mt: "4rem" }}>
        <Box as="h1">Hello World</Box>
      </Container>
    </Box>
  )
}
