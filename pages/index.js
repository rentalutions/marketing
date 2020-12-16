import { prismicClient } from "src/prismic.config"

export default function IndexPage() {
  return null
}

/**
 * TODO: Indicate production pages with a tag.
 * Redirect to first production page instead of hard coding it with an array.
 */

// const landingPages = ["listings"]

export async function getServerSideProps() {
  const {
    results: [page],
  } = await prismicClient.query("")
  if (page) {
    return {
      redirect: {
        destination: `/${page.type}/${page.uid}`,
        permanent: false,
      },
    }
  }
  return {
    redirect: {
      destination: "/info/listings",
      permanent: false,
    },
  }
}
