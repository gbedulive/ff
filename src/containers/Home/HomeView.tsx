import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const [Navbar, Hero, Offers, FooterView] = [
  dynamic(() => import("@components/Navbar/Navbar")),
  dynamic(() => import("@components/Home/Hero")),
  dynamic(() => import("@components/Home/Offers")),
  dynamic(() => import("@components/Home/FooterView")),
];

export default function HomeView() {
  return (
    <>
      <Box
        backgroundImage="url('/images/homepage_background.svg')"
        backgroundPosition="top"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
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
