import dynamic from "next/dynamic";
import Head from "next/head";
import { Center } from "@chakra-ui/react";

const FaqView = dynamic(() => import("@containers/Faq/FaqView"), {
  loading: () => (
    <Center h="100vh" w="100%">
      <div className="loader-line"></div>
    </Center>
  ),
});

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
