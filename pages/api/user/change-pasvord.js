import { getSession } from "next-auth/react"
import { conectingToDatabase } from "@/lib/db"
import { verifyPassword, hashPasvord } from "@/lib/auth"

export default async function hendler(req, res) {
  if (req.method !== "PATCH") {
    return
  }

  const session = await getSession({ req: req })

  if (!session) {
    res.status(401).json({ message: "Not autenteficated" })
    return
  }

  const userEmail = session.user.email
  const oldPassword = req.body.oldPassword
  const newPassword = req.body.newPassword

  const client = await conectingToDatabase()

  const usersColection = client.db().collection("users")

  const user = await usersColection.findOne({ email: userEmail })

  if (!user) {
    res.status(404).json({ message: "User not found!" })
    client.close()
    return
  }

  const curentPassword = user.password

  const passwordsAreEqual = await verifyPassword(oldPassword, curentPassword)

  if (!passwordsAreEqual) {
    res.status(403).json({ message: "Invalid password" })
    client.close()
    return
  }

  const hashedPassword = await hashPasvord(newPassword)

  const result = await usersColection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  )

  client.close()
  res.status(200).json({ message: "Password updatet" })
}
