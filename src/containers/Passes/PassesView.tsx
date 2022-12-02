import React from "react";
import dynamic from "next/dynamic";
import { Box, Center } from "@chakra-ui/react";

const [Navbar, Hero, FooterView] = [
  dynamic(() => import("@components/Navbar/Navbar"), {
    loading: () => (
      <Center h="100vh" w="100%">
        <div className="loader-line"></div>
      </Center>
    ),
  }),
  dynamic(() => import("@components/Passes/Hero"), {
    loading: () => (
      <Center h="100vh" w="100%">
        <div className="loader-line"></div>
      </Center>
    ),
  }),
  dynamic(() => import("@components/Home/FooterView"), {
    loading: () => (
      <Center h="100vh" w="100%">
        <div className="loader-line"></div>
      </Center>
    ),
  }),
];

export default function PassesView() {
  return (
    <Box backgroundColor="#F5F5F5">
      <Navbar />
      <Hero />
      <FooterView />
    </Box>
  );
}
