import { hash, compare } from "bcryptjs"

export async function hashPasvord(pasvord) {
  const hashedPasvord = await hash(pasvord, 12)
  return hashedPasvord
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword)
  return isValid
}
