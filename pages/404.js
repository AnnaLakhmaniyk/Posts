import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

import Heading from "@/components/Heading"
import s from "../styles/404.module.css"

export default function Error() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [router])

  return (
    <div className={s.wrapper}>
      <Head>
        <title>Er</title>
      </Head>
      <div>
        <Heading text="404" />
        <p> Something is going wrong...</p>
      </div>
    </div>
  )
}
