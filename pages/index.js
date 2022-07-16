import Head from "next/head"
import Connect from "../components/Connect"
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Index() {
  const address = true;
  return (
    <>
      <Head>
        <title>Index</title>
        <link rel="favicon" href="favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {!address ? <Connect /> : <Dashboard />}
      <Footer />
    </>
  )
}


