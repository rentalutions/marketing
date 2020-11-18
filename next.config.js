const withPlugins = require("next-compose-plugins")
const withTM = require("next-transpile-modules")([
  "next-slicezone",
  "prismic-reactjs",
])

module.exports = withPlugins([withTM], {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/info/listings",
        permanent: false,
      },
    ]
  },
})
