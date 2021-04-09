import jwt from "jsonwebtoken"

const AVAIL_ECDSA_PUBLIC_KEY = Buffer.from(
  process.env.AVAIL_ECDSA_PUBLIC_KEY,
  "base64"
).toString()

function analytics(req, res) {
  const visitorJWT = req.cookies.__AVT

  if (visitorJWT) {
    try {
      const token = jwt.verify(visitorJWT, AVAIL_ECDSA_PUBLIC_KEY, {
        algorithm: "ES256",
      })
      return res.json(token)
    } catch {
      return res.status(401).send({ message: "Authorization JWT is invalid" })
    }
  }
  return res.status(401).send({ message: "Authorization JWT not found" })
}

export default analytics
