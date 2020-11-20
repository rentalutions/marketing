const isDark = (scheme, intensity) => {
  switch (scheme) {
    case "straw":
    case "gold":
      return intensity > 700
    case "ui":
      return intensity > 500
    default:
      return intensity > 300
  }
}

const COLOR_REXP = /^\S+_\d+$/

export const analyzeColor = (color) => {
  if (typeof color !== "string" || !COLOR_REXP.test(color)) {
    return []
  }
  const [scheme, intensity] = color.split("_")
  return [scheme, isDark(scheme, intensity)]
}
