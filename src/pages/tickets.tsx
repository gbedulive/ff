import dynamic from "next/dynamic";
import Head from "next/head";
import { Center } from "@chakra-ui/react";

const PassesView = dynamic(() => import("@containers/Passes/PassesView"), {
  loading: () => (
    <Center h="100vh" w="100%">
      <div className="loader-line"></div>
    </Center>
  ),
});

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
