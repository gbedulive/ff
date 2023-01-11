import dynamic from "next/dynamic";
import Head from "next/head";
import { Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const TempHomeView = dynamic(() => import("@containers/Home/TempHomeView"), {
  // loading: () => (
  //   <Center h="100vh" w="100%">
  //     <div className="loader-line"></div>
  //   </Center>
  // ),
});

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowContent(true), 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Future Festival</title>
        <meta name="description" content="Future Festival" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>

      {showContent ? (
        <TempHomeView />
      ) : (
        <Center h="100vh" w="100%">
          <div className="loader-line"></div>
        </Center>
      )}
    </div>
  );
}
