import React from "react";
import { HStack, Box, Heading } from "@chakra-ui/react";
import { shimmer, toBase64 } from "@utils/Image";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      maxW="min(100%, 1800px)"
      mt={{ lg: "1.5rem" }}
      mx="auto"
      px={{ base: "1rem", lg: "3rem" }}
    >
      <HStack
        spacing={0}
        gap={{ base: "2rem", lg: "0rem" }}
        flexDirection={{ base: "column-reverse", lg: "row" }}
      >
        <Box width={{ base: "100%", lg: "50%" }}>
          <Heading
            fontSize={{
              base: "3rem",
              md: "4rem",
              lg: "4.5rem",
              xl: "5rem",
              "2xl": "5rem",
            }}
            lineHeight={{
              base: "60px",
              md: "75px",
              lg: "80px",
              xl: "85px",
              "2xl": "90px",
            }}
            fontWeight="900"
          >
            Frequently
          </Heading>
          <Heading
            fontSize={{
              base: "3rem",
              md: "4rem",
              lg: "4.5rem",
              xl: "5rem",
              "2xl": "5rem",
            }}
            fontWeight="900"
          >
            Asked
          </Heading>
          <Heading
            fontSize={{
              base: "3rem",
              md: "4rem",
              lg: "4.5rem",
              xl: "5rem",
              "2xl": "5rem",
            }}
            lineHeight={{
              base: "60px",
              md: "75px",
              lg: "80px",
              xl: "85px",
              "2xl": "90px",
            }}
            fontWeight="900"
          >
            Questions
          </Heading>
        </Box>

        <Box
          display="flex"
          justifyContent={{ base: "center", lg: "left" }}
          width={{ base: "100%", lg: "50%" }}
        >
          <Image
            src="/images/homepage_left_photo.png"
            alt="future fest"
            placeholder="blur"
            width={700}
            height={700}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      </HStack>
    </Box>
  );
}
