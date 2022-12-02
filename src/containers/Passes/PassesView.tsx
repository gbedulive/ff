import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const [Navbar, Hero, FooterView] = [
  dynamic(() => import("@components/Navbar/Navbar")),
  dynamic(() => import("@components/Passes/Hero")),
  dynamic(() => import("@components/Home/FooterView")),
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
