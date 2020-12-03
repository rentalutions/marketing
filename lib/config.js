import { theme } from "@rent_avail/base"

const { fontSizes: fs, fontWeights: fw } = theme

export const availContainerWidth = ["62rem", "62rem", "62rem", "80rem", "96rem"]

export const breakpoints = ["480px", "720px", "960px", "1200px", "1440px"]

export const h1Sizing = {
  fontSize: [fs.title, fs.headline, fs.hero],
  fontWeight: [fw.regular, fw.regular, fs.light],
}
export const h2Sizing = {
  fontSize: [fs.title, fs.title, fs.headline],
}
export const h3Sizing = {
  fontSize: [fs.subtitle, fs.subtitle, fs.title],
}
