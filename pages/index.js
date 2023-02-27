import Heading from "@/components/Heading"
import Head from "next/head"
import s from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="hellow world!" />
    </div>
  )
}
