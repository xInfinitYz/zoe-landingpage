import Head from "next/head";
import Slideshow from "../components/SlideShow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zoe Cosentino</title>
        <link rel="icon" href="/pro_dark.ico" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/pro_light.ico" media="(prefers-color-scheme: light)" />
      </Head>
      <Slideshow/>
    </div>
  )
}
