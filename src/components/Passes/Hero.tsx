import React from "react";
import { Box, Image, Heading, Divider } from "@chakra-ui/react";
import { ExplorerCard, AdventurerCard } from "./PassesCard";

export default function Hero() {
  return (
    <Box
      maxW="min(100%, 1800px)"
      mt={{ lg: "1.5rem" }}
      mx="auto"
      px={{ base: "1rem", lg: "3rem" }}
    >
      <Image w="100vw" alt="passes" src="/images/passes_hero_photo.png" />

      <Heading
        mt="5rem"
        mb="4rem"
        textAlign="center"
        fontWeight={900}
        color="#3a3a3a"
        fontSize="5xl"
      >
        Passes
      </Heading>

      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        gap="7rem"
        alignItems="center"
      >
        <Box>
          <ExplorerCard />
        </Box>
        <Box>
          <AdventurerCard />
        </Box>
      </Box>

      <Divider
        borderColor="#000000"
        mt={{ base: "4rem", lg: "7rem" }}
        width="300px"
        mx="auto"
      />
    </Box>
  );
}
