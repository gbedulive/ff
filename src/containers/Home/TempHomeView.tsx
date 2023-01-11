import React from "react";
import dynamic from "next/dynamic";
import { Box, Center } from "@chakra-ui/react";

const [Navbar, Hero] = [
  dynamic(() => import("@components/Navbar/Navbar"), {
    loading: () => (
      <Center h="100vh" w="100%">
        <div className="loader-line"></div>
      </Center>
    ),
  }),
  dynamic(() => import("@components/Home/TempHomeHero"), {
    loading: () => (
      <Center h="100vh" w="100%">
        <div className="loader-line"></div>
      </Center>
    ),
  }),
];

export default function TempHomeView() {
  return (
    <Box height="100vh">
      <Box
        backgroundImage="url('/images/homepage_background.png')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundColor="#D6BFF2"
        height="100%"
      >
        <Navbar />
        <Hero />
      </Box>
    </Box>
  );
}
