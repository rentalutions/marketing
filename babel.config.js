module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { ssr: true }],
    [
      "module-resolver",
      {
        alias: {
          components: "./src/components",
          utils: "./src/utils",
          config: "./src/config",
        },
      },
    ],
  ],
}
