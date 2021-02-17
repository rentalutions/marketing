import { EMBED_WHITELIST } from "config"
import { Elements } from "prismic-reactjs"

export function isValidEmbed(embed) {
  return embed?.html && EMBED_WHITELIST.includes(embed?.provider_url)
}

export function styleEmbed(richText, sx) {
  const richTextArray = Array.isArray(richText) ? richText : [richText]
  return richTextArray.map((item) => {
    const { type } = item
    return {
      ...item,
      wrapperSx: type === Elements.embed ? sx : undefined,
    }
  })
}
