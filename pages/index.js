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
  return (
    <div className={s.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" />
      <Socials socials={socials} />
    </div>
  )
}
