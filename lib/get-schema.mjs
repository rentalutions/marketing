import dotenv from "dotenv"
import fetch from "node-fetch"
import fs from "fs"
import path from "path"
import { exec } from "child_process"
import { promisify } from "util"
import { getIntrospectionQuery, buildClientSchema, printSchema } from "graphql"

dotenv.config()

const PRISMIC_REPO_API_URL = `https://${process.env.PRISMIC_REPO_ID}.prismic.io/api/v2`
const PRISMIC_REPO_GRAPHQL_URL = `https://${process.env.PRISMIC_REPO_ID}.prismic.io/graphql`

const writeFile = promisify(fs.writeFile)
const execute = promisify(exec)

async function getPrismicRef(id = "master") {
  return fetch(PRISMIC_REPO_API_URL)
    .then((result) => result.json())
    .then((json) => json.refs)
    .then((refs) => refs.find((ref) => ref.id === id))
}

async function getRemoteSchema(endpoint, options) {
  const introspectionQuery = getIntrospectionQuery()
  let url = endpoint + `?query=${encodeURIComponent(introspectionQuery)}`
  return fetch(url, {
    method: "GET",
    headers: options.headers,
  })
    .then((res) => res.json())
    .then((json) => buildClientSchema(json.data))
    .then((schema) => printSchema(schema))
}

async function writeToFile(destination, schema) {
  const output = path.resolve(process.cwd(), destination)
  return writeFile(output, schema).then(() =>
    execute("./node_modules/.bin/prettier --write schema/schema.graphql ")
  )
}

process.on("unhandledRejection", (error) => {
  console.error("Failed to get Graphql schema 🙅‍♀️\n", error.message)
})
;(async () => {
  const master = await getPrismicRef()
  const schema = await getRemoteSchema(PRISMIC_REPO_GRAPHQL_URL, {
    headers: {
      "Prismic-Ref": master.ref,
    },
  })

  await writeToFile("./schema/schema.graphql", schema)
  console.log("Graphql schema updated 🆒")
})()
