import dynamic from "next/dynamic";
import Head from "next/head";
const PassesView = dynamic(() => import("@containers/Passes/PassesView"));

export default function Passes() {
  return (
    <div>
      <Head>
        <title>Future Festival - Passes </title>
        <meta name="description" content="Future Festival" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <PassesView />
    </div>
  );
}
