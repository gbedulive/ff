import dynamic from "next/dynamic";
import Head from "next/head";
const HomeView = dynamic(() => import("@containers/Home/HomeView"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Future Festival</title>
        <meta name="description" content="Future Festival" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <HomeView />
    </div>
  );
}
