import dynamic from "next/dynamic";
import Head from "next/head";
import { Center } from "@chakra-ui/react";

const HomeView = dynamic(() => import("@containers/Home/HomeView"), {
  loading: () => (
    <Center h="100vh" w="100%">
      <div className="loader-line"></div>
    </Center>
  ),
});

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
