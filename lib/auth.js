import { hash } from "bcryptjs"

export async function hashPasvord(pasvord) {
  const hashedPasvord = await hash(pasvord, 12)
  return hashedPasvord
}
