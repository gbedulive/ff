import dynamic from "next/dynamic";
import Head from "next/head";
const FaqView = dynamic(() => import("@containers/Faq/FaqView"));

export default function Faq() {
  return (
    <div>
      <Head>
        <title>Future Festival - Frequently asked questions </title>
        <meta name="description" content="Future Festival" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <FaqView />
    </div>
  );
}
