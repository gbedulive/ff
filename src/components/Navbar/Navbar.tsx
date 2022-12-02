import React from "react";
import {
  Text,
  Box,
  HStack,
  VStack,
  // Image,
  Link as ChakraLink,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box maxW="min(100%, 1800px)" mx="auto" px={{ base: "1rem", lg: "3rem" }}>
      <HStack justifyContent="space-between" spacing={0} minH="100px">
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", lg: "row" }}
          py="1.2rem"
        >
          <Link href="/" passHref>
            <Image
              src="/images/future_fest_logo.svg"
              alt="Future Fest Logo"
              // boxSize={{ base: "100px", lg: "140px" }}
              width={150}
              height={150}
            />
          </Link>
          <Text
            className="header_date"
            fontWeight="500"
            ml="1.4rem"
            color="#3a3a3a"
            transform="translateY(-20px)"
          >
            Jan 5 - 7
          </Text>
        </Box>

        <Box>
          <Box
            width="35px"
            height="35px"
            p="7px"
            borderRadius="50%"
            background="transparent"
            flexDirection="column"
            display={{ base: "flex", lg: "none" }}
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            boxShadow="2xl"
            onClick={onOpen}
            backgroundColor="white"
          >
            <Box
              w="100%"
              h="2px"
              borderRadius="10px"
              border="1px"
              backgroundColor="#222222"
            />
            <Box
              w="80%"
              mt="5px"
              h="2px"
              borderRadius="10px"
              border="1px"
              backgroundColor="#222222"
            />
          </Box>

          <HStack spacing={0} display={{ base: "none", lg: "flex" }}>
            {routes.map(
              ({ label, route }: { label: string; route: string }) => {
                return (
                  <Link key={label} href={route}>
                    <ChakraLink
                      fontSize="sm"
                      className="nav_links"
                      fontWeight={400}
                      mr="1.8rem"
                      color="#3a3a3a"
                      _hover={{ textDecoration: "none", borderBottom: "1px" }}
                    >
                      {label}
                    </ChakraLink>
                  </Link>
                );
              }
            )}

            <IconButton
              aria-label="search"
              icon={<BiSearch />}
              backgroundColor="transparent"
              _hover={{ backgroundColor: "none" }}
              _active={{ backgroundColor: "none" }}
              _focus={{ outline: "none" }}
              color="#111115"
            />
          </HStack>
        </Box>
      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent minW="100vw" transitionDuration="20000">
          <DrawerCloseButton
            border="1px"
            borderRadius="50%"
            fontSize="xl"
            top="50px"
            right="20px"
            boxSize="40px"
          />

          <DrawerBody>
            <VStack
              height="100%"
              alignItems="start"
              justifyContent="center"
              spacing={0}
              gap="2rem"
            >
              {routes?.map(
                ({ label, route }: { label: string; route: string }) => {
                  return (
                    <Link key={label} href={route}>
                      <ChakraLink
                        fontSize="xl"
                        className="nav_links"
                        fontWeight="medium"
                        color="#3a3a3a"
                        _hover={{ textDecoration: "none", borderBottom: "1px" }}
                      >
                        {label}
                      </ChakraLink>
                    </Link>
                  );
                }
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const routes = [
  {
    label: "Tickets",
    route: "tickets",
  },
  {
    label: "Experiences",
    route: "experience",
  },
  {
    label: "FAQs",
    route: "faq",
  },
];
