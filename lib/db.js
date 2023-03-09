import { MongoClient } from "mongodb"

export async function conectingToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://user:qCs4uDeUGmUPkH3Z@cluster0.kyqa2ax.mongodb.net/auth-demo?retryWrites=true&w=majority"
  )

  return client
}
