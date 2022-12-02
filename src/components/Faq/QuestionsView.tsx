import React from "react";
import { Box, Text, Link, Divider } from "@chakra-ui/react";
import General from "./General";
import Passes from "./Passes";

export default function QuestionsView() {
  const links = [
    {
      label: "General",
      link: "#general",
    },
    {
      label: "Passes, Order & Shipping",
      link: "#passes",
    },
    {
      label: "Presale Registration",
      link: "#presale",
    },
  ];

  return (
    <Box
      maxW="min(100%, 1800px)"
      mt={{ base: "4rem" }}
      mx="auto"
      px={{ base: "1rem", lg: "3rem" }}
    >
      <Text fontWeight="300" fontSize="sm">
        JUMP TO:
      </Text>
      <Box flexWrap="wrap" display="flex" my="2rem">
        {links.map((item: any) => (
          <Link
            key={item.label}
            href={item.link}
            fontFamily="Inter"
            color="#3a3a3a"
            mr="2rem"
            fontWeight={600}
            minW="fit-content"
            borderBottom="1px solid #000"
            _hover={{ textDecoration: "none" }}
          >
            {item.label}
          </Link>
        ))}
      </Box>

      <General />
      <Passes />

      <Divider
        borderColor="#000000"
        mt={{ base: "4rem", lg: "7rem" }}
        width="300px"
        mx="auto"
      />
    </Box>
  );
}
