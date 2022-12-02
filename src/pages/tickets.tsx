import dynamic from "next/dynamic";
import Head from "next/head";
import { Center, Spinner } from "@chakra-ui/react";

const PassesView = dynamic(() => import("@containers/Passes/PassesView"), {
  loading: () => (
    <Center h="100vh" w="100%">
      <Spinner
        thickness="3px"
        speed="0.65s"
        emptyColor="#0000005e"
        color="#A6CDFC"
        size="xl"
      />
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
