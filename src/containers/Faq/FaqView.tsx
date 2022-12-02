import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const [Navbar, Hero, QuestionsView, FooterView] = [
  dynamic(() => import("@components/Navbar/Navbar")),
  dynamic(() => import("@components/Faq/Hero")),
  dynamic(() => import("@components/Faq/QuestionsView")),
  dynamic(() => import("@components/Home/FooterView")),
];

export default function FaqView() {
  return (
    <Box backgroundColor="#F5F5F5">
      <Navbar />
      <Hero />
      <QuestionsView />
      <FooterView />
    </Box>
  );
}
