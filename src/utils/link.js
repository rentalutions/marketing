export function getTargetProps(target) {
  if (target) {
    return { target, ...(target !== "_self" && { rel: "noopener" }) }
  }
}
