const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
  images: {
    domains: [
      "images.prismic.io",
      "avail-marketing.cdn.prismic.io",
      "avail-marketing-staging.cdn.prismic.io",
    ],
    deviceSizes: [480, 720, 960, 1080, 1200, 1440],
  },
  future: {
    webpack5: true,
  },
})
