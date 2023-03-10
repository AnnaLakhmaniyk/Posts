import { useSession } from "next-auth/react"

import { useEffect } from "react"

import Heading from "@/components/Heading"
import Socials from "@/components/Socials"
import Head from "next/head"
import s from "../styles/Home.module.css"

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
}

export default function Home({ socials }) {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  console.log(status, session)

  useEffect(() => {
    if (!session) {
      window.location.href = "/auth"
    }
  }, [session])

  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" />
      {loading && <p>Loding...</p>}
      <Socials socials={socials} />
    </div>
  )
}
