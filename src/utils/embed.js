import { EMBED_WHITELIST } from "config"

export function isValidEmbed(embed) {
  return embed?.html && EMBED_WHITELIST.includes(embed?.provider_url)
}
