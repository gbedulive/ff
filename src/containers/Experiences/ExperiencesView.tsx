import React from "react";
import {
  Box,
  Text,
  IconButton,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

export default function ExperiencesView() {
  return (
    <Box
      minHeight="100vh"
      background="linear-gradient(179.39deg, #E2A9F2 -76.64%, #B1B5F4 93.01%)"
    >
      <Box maxW="min(100%, 1800px)" mx="auto" px={{ base: "1rem", lg: "3rem" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          height="70px"
          alignItems="center"
        >
          <Text color="#ffffff" fontWeight="bold" fontSize="xl">
            Schedule
          </Text>

          <IconButton
            aria-label="search"
            icon={<BiSearch size="1.7rem" color="#ffffff" />}
            backgroundColor="transparent"
            _hover={{ backgroundColor: "none" }}
            _active={{ backgroundColor: "none" }}
            _focus={{ outline: "none" }}
            color="#111115"
          />
        </Box>

        <Box marginTop="3rem">
          <HStack spacing={0} alignItems="flex-start">
            <Box
              width="fit-content"
              marginRight={{ base: "1rem", lg: "2rem" }}
              position="sticky"
              top="3rem"
            >
              <Text
                color="#ffffff"
                fontWeight="semibold"
                fontSize="sm"
                marginBottom="1.5rem"
              >
                JAN
              </Text>
              <Button
                variant="unstyled"
                width="fit-content"
                textAlign="center"
                backgroundColor="rgba(60, 208, 255, 0.18)"
                borderRadius="20px"
                fontWeight="300"
                fontSize="xl"
                color="#ffffff"
                padding="6px"
                boxShadow="sm"
                height="auto"
                display="flex"
                flexDirection="column"
                transition="all 0.7s"
                _hover={{
                  backgroundColor: "#2E5DB6",
                  transform: "scale(1.1, 1.1)",
                }}
              >
                05
                <Text as="span" fontSize="xs">
                  THUR
                </Text>
              </Button>
              <Button
                variant="unstyled"
                width="fit-content"
                textAlign="center"
                backgroundColor="rgba(60, 208, 255, 0.18)"
                borderRadius="20px"
                fontWeight="300"
                fontSize="xl"
                color="#ffffff"
                padding="6px"
                boxShadow="sm"
                height="auto"
                display="flex"
                flexDirection="column"
                margin="1rem 0rem"
                transition="all 0.7s"
                _hover={{
                  backgroundColor: "#2E5DB6",
                  transform: "scale(1.1, 1.1)",
                }}
              >
                06
                <Text as="span" fontSize="xs">
                  FRI
                </Text>
              </Button>
              <Button
                variant="unstyled"
                width="fit-content"
                textAlign="center"
                backgroundColor="rgba(60, 208, 255, 0.18)"
                borderRadius="20px"
                fontWeight="300"
                fontSize="xl"
                color="#ffffff"
                padding="6px"
                boxShadow="sm"
                height="auto"
                display="flex"
                flexDirection="column"
                transition="all 0.7s"
                _hover={{
                  backgroundColor: "#2E5DB6",
                  transform: "scale(1.1, 1.1)",
                }}
              >
                07
                <Text as="span" fontSize="xs">
                  SAT
                </Text>
              </Button>
            </Box>

            <Box width="100%">
              <HStack spacing={0} alignItems="flex-start">
                <Box
                  width={{ base: "100%", lg: "65%" }}
                  display="grid"
                  gridTemplateColumns={{
                    base: "1fr",
                    md: "1fr 1fr",
                    "2xl": "1fr 1fr",
                  }}
                  gap="1.5rem"
                >
                  <Box
                    borderRadius="20px"
                    boxShadow="2xl"
                    width="100%"
                    height={{ base: "220px", lg: "250px", "2xl": "280px" }}
                    backgroundImage='linear-gradient(180.46deg, rgba(236, 220, 229, 0) 25.17%, #545862 99.59%), url("/images/joeboy.png")'
                    backgroundPosition="top"
                    backgroundSize="cover"
                    padding="0.8rem"
                  >
                    <VStack
                      width="100%"
                      height="100%"
                      alignItems="flex-end"
                      justifyContent="space-between"
                    >
                      <Text
                        background="#89B4F390"
                        width="40px"
                        height="40px"
                        justifyContent="center"
                        color="#ffffff"
                        fontWeight="300"
                        alignItems="center"
                        display="flex"
                        borderRadius="full"
                        float="right"
                      >
                        9
                        <Text fontSize="xs" fontWeight={200}>
                          AM
                        </Text>
                      </Text>

                      <Box width="100%">
                        <Text
                          color="#fff"
                          fontSize={{ base: "xl", "2xl": "2xl" }}
                          fontWeight="300"
                        >
                          JOEBOY LIVE IN CONCERT
                        </Text>

                        <Text
                          color="#b8b8b8"
                          fontSize={{ base: "xs", "2xl": "sm" }}
                          fontWeight={300}
                        >
                          Jogor Center
                        </Text>
                      </Box>
                    </VStack>
                  </Box>

                  <Box
                    borderRadius="20px"
                    boxShadow="2xl"
                    width="100%"
                    height={{ base: "220px", lg: "250px", "2xl": "280px" }}
                    backgroundImage='linear-gradient(180.46deg, rgba(236, 220, 229, 0) 25.17%, #545862 99.59%), url("/images/joeboy.png")'
                    backgroundPosition="top"
                    backgroundSize="cover"
                    padding="0.8rem"
                  >
                    <VStack
                      width="100%"
                      height="100%"
                      alignItems="flex-end"
                      justifyContent="space-between"
                    >
                      <Text
                        background="#89B4F390"
                        width="40px"
                        height="40px"
                        justifyContent="center"
                        color="#ffffff"
                        fontWeight="300"
                        alignItems="center"
                        display="flex"
                        borderRadius="full"
                        float="right"
                      >
                        9
                        <Text fontSize="xs" fontWeight={200}>
                          AM
                        </Text>
                      </Text>

                      <Box width="100%">
                        <Text
                          color="#fff"
                          fontSize={{ base: "xl", "2xl": "2xl" }}
                          fontWeight="300"
                        >
                          JOEBOY LIVE IN CONCERT
                        </Text>

                        <Text
                          color="#b8b8b8"
                          fontSize={{ base: "xs", "2xl": "sm" }}
                          fontWeight={300}
                        >
                          Jogor Center
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </Box>

                <Box display={{ base: "none", lg: "block" }}>OPEN STATE</Box>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
