import React from "react";
import dynamic from "next/dynamic";
import { Box, Center, Spinner } from "@chakra-ui/react";

const [Navbar, Hero, Offers, FooterView] = [
  dynamic(() => import("@components/Navbar/Navbar"), {
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
  }),
  dynamic(() => import("@components/Home/Hero"), {
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
  }),
  dynamic(() => import("@components/Home/Offers"), {
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
  }),
  dynamic(() => import("@components/Home/FooterView"), {
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
  }),
];

export default function HomeView() {
  return (
    <>
      <Box
        backgroundImage="url('/images/homepage_background.svg')"
        backgroundPosition="top"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundColor="#DEE3F2"
      >
        <Navbar />
        <Hero />
      </Box>
      <Box backgroundColor="#F4EBF7">
        <Offers />
        <FooterView />
      </Box>
    </>
  );
}
