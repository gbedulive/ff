import React from "react";
import dynamic from "next/dynamic";
import { Box, Spinner, Center } from "@chakra-ui/react";

const [Navbar, Hero, QuestionsView, FooterView] = [
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
  dynamic(() => import("@components/Faq/Hero"), {
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
  dynamic(() => import("@components/Faq/QuestionsView"), {
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
