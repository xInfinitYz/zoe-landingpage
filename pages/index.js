import Head from "next/head";
import Slideshow from "../components/SlideShow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zoe Cosentino</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Slideshow/>
    </div>
  )
}
