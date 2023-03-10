import AuthForm from "@/components/auth/AuthForm"
import { useEffect } from "react"
import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function AuthPage() {
  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/")
      }
    })
  }, [router])

  return <AuthForm />
}
