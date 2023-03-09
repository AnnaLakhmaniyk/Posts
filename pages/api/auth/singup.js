import { conectingToDatabase } from "@/lib/db"
import { hashPasvord } from "@/lib/auth"

export default async function hendler(req, res) {
  if (req.method === "POST") {
    const data = req.body

    const { email, password } = data

    if (!email || !email.includes("@") || !password || password.trim().length < 7) {
      res
        .status(422)
        .json({ message: "Invalid input - password should also be at least 7 characters long." })
      return
    }

    const client = await conectingToDatabase()

    const db = client.db()

    const exsistingUser = await db.collection("users").findOne({ email: email })

    if (exsistingUser) {
      res.status(422).json({ message: "User exists already!" })
      client.close()
      return
    }

    const hashedPassword = await hashPasvord(password)

    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
    })

    res.status(201).json({ message: "Created user!" })
    client.close()
  }
}
