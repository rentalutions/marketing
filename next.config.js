const withPlugins = require("next-compose-plugins")
const withTM = require("next-transpile-modules")(["prismic-reactjs"])

module.exports = withPlugins([withTM], {})
