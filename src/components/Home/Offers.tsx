import React from "react";
import {
  Box,
  Text,
  Divider,
  HStack,
  Img,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { shimmer, toBase64 } from "@utils/Image";
import Image from "next/image";

export default function Offers() {
  return (
    <Box position="relative">
      <Img
        src="/images/homepage_divider.png"
        alt="homepage divider"
        width="100vw"
        top="-100px"
        position="absolute"
        height="200px"
      />

      <Box px={{ base: "1rem", lg: "3rem" }} position="relative" zIndex="2">
        <HStack
          flexDirection={{ base: "column", lg: "row" }}
          gap="2.5rem"
          spacing={0}
        >
          <Box
            width={{ base: "100%", lg: "50%" }}
            display="flex"
            justifyContent={{ base: "center", lg: "right" }}
            position="relative"
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
          <Box width={{ base: "100%", lg: "50%" }}>
            <Text
              color="#3a3a3a"
              fontWeight="900"
              fontSize={{
                base: "1.4rem",
                md: "1.7rem",
                lg: "1.8rem",
                xl: "1.9rem",
                "2xl": "2.2rem",
              }}
              mb="0.8rem"
            >
              Passes, Order & Shipping
            </Text>

            <Text
              fontSize={{
                base: "0.9rem",
                md: "1.2rem",
                "2xl": "1.3rem",
              }}
              color="#000000"
              maxWidth="600px"
            >
              Bundle your Festival Passes with local resort accommodations and
              Any Line Shuttle transportation. Prices Vary. Official Hotel
              Packages are available for both Coachella weekends and sold
              exclusively through Valley Music Travel.
            </Text>
          </Box>
        </HStack>

        <Divider
          borderColor="#000000"
          width="200px"
          mx="auto"
          mt={{ base: "2.5rem", lg: "1.5rem" }}
          mb="1.5rem"
        />

        <HStack
          flexDirection={{ base: "column-reverse", lg: "row" }}
          gap="2.5rem"
          spacing={0}
        >
          <Box width={{ base: "100%", lg: "50%" }} textAlign={{ lg: "right" }}>
            <Text
              color="#3a3a3a"
              fontWeight="900"
              fontSize={{
                base: "1.4rem",
                md: "1.7rem",
                lg: "1.8rem",
                xl: "1.9rem",
                "2xl": "2.2rem",
              }}
              mb="0.8rem"
            >
              Passes, Order & Shipping
            </Text>

            <Text
              fontSize={{
                base: "0.9rem",
                md: "1.2rem",
                "2xl": "1.3rem",
              }}
              color="#000000"
              float={{ lg: "right" }}
              maxWidth="600px"
            >
              Bundle your Festival Passes with local resort accommodations and
              Any Line Shuttle transportation. Prices Vary. Official Hotel
              Packages are available for both Coachella weekends and sold
              exclusively through Valley Music Travel.
            </Text>
          </Box>

          <Box
            width={{ base: "100%", lg: "50%" }}
            display="flex"
            justifyContent={{ base: "center", lg: "left" }}
          >
            <Image
              src="/images/homepage_right_photo.png"
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
    </Box>
  );
}
