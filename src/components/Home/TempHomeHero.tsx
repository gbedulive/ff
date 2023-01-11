import React from "react";
import {
  Box,
  Heading,
  Button,
  Input,
  Center,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export default function TempHomeHero() {
  return (
    <Box
      maxW="min(100%, 1800px)"
      // mt="2rem"
      mx="auto"
      px={{ base: "1rem", lg: "3rem" }}
    >
      <Box>
        <Box
          width={{ base: "95%", lg: "80%", xl: "70%" }}
          mx="auto"
          textAlign="center"
        >
          <Heading
            className="hero_text_heading"
            fontSize={{
              base: "2.4rem",
              md: "4rem",
              lg: "6rem",
              xl: "5.5rem",
              "2xl": "6rem",
            }}
            lineHeight={{
              base: "50px",
              md: "65px",
              lg: "70px",
              xl: "75px",
              "2xl": "80px",
            }}
            fontWeight="900"
            color="white"
            textShadow="2px 2px #22222230"
            id="hero_text_heading"
          >
            EXPERIENCE
          </Heading>
          <Heading
            className="hero_text_heading"
            fontSize={{
              base: "2.4rem",
              md: "4rem",
              lg: "6rem",
              xl: "5.5rem",
              "2xl": "6rem",
            }}
            fontWeight="900"
            color="white"
            textShadow="2px 2px #22222230"
            id="hero_text_heading"
          >
            TOMORROW
          </Heading>
          <Heading
            lineHeight={{
              base: "50px",
              md: "65px",
              lg: "70px",
              xl: "75px",
              "2xl": "80px",
            }}
            fontSize={{
              base: "2.4rem",
              md: "4rem",
              lg: "6rem",
              xl: "5.5rem",
              "2xl": "6rem",
            }}
            fontWeight="900"
            color="white"
            textShadow="2px 2px #22222230"
            className="hero_text_heading"
            id="hero_text_heading"
          >
            TODAY
          </Heading>
        </Box>
      </Box>

      <Center mt="3rem">
        <Box
          maxWidth="300px"
          width="300px"
          // height="40px"
          // display="flex"
          // flexDirection="column"
        >
          <Input
            border="1px solid red"
            placeholder="johndoe@email.com"
            bg="white"
            focusBorderColor="white"
            fontSize="sm"
            borderRadius="0"
            mr="5px"
          />

          <Center mt="10px">
            <Button
              variant="unstyled"
              display="inline-flex"
              padding="0 1.2rem"
              height="40px"
              textDecoration="none"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
              borderRadius="0px"
              backgroundColor="#b5fcaa"
              position="relative"
              fontWeight="500"
              fontSize="sm"
              className="group"
              id="buy_ticket_btn"
              type="button"
              aria-label="buy ticket button"
              _hover={{ color: "#ffffff" }}
            >
              <Box
                width="0%"
                height="0%"
                opacity="0"
                lineHeight="40px"
                borderRadius="50%"
                backgroundColor="#000000"
                position="absolute"
                transition="all 0.7s ease-Out"
                top="20px"
                left="70px"
                _groupHover={{
                  width: "200% ",
                  height: "500%",
                  opacity: "1",
                  top: "-70px",
                  left: "-70px",
                }}
              />
              <ChakraLink
                display="flex"
                _hover={{ textDecoration: "none" }}
                alignItems="center"
                position="relative"
                gap="10px"
                _groupHover={{ color: "#ffffff" }}
                transition="all 0.45s ease-Out"
              >
                Notify Me
              </ChakraLink>
              {/* <Text
              _groupHover={{ color: "#ffffff" }}
              transition="all 0.45s ease-Out"
              color="red"
              
            >
              Notify Me
            </Text> */}
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}
