import Head from "next/head"
import Navbar from "../components/Navbar"

export default function Index() {
  return (
    <>
      <Head>
        <title>Index</title>
        <link rel="favicon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

    </>
  )
}


