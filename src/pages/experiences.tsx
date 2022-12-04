import dynamic from "next/dynamic";
import Head from "next/head";
import { Center } from "@chakra-ui/react";

const ExperiencesView = dynamic(
  () => import("@containers/Experiences/ExperiencesView"),
  {
    loading: () => (
      <Center h="100vh" w="100%">
        <div className="loader-line"></div>
      </Center>
    ),
  }
);

export default function Faq() {
  return (
    <div>
      <Head>
        <title>Future Festival - Experiences </title>
        <meta name="description" content="Future Festival" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <ExperiencesView />
    </div>
  );
}
