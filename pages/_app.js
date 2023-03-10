import "@/styles/globals.css"
import Layout from "@/components/Layout"
import Head from "next/head"
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lato:wght@100;300;400;700;900&family=Poppins:wght@400;600&family=Source+Sans+Pro:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
