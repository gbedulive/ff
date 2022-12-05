import React from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  VStack,
  Center,
  Link as ChakraLink,
  IconButton,
} from "@chakra-ui/react";
import { BsClock } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";
import { TagSvg, MicrophoneSvg } from "@components/Icons/Icons";
import Link from "next/link";

export default function ExperienceDetails({
  closeDetails,
  data,
}: {
  closeDetails: () => void;
  data: any;
}) {
  return (
    <Box width="100%" background="#CAAFF3" borderRadius="20px" boxShadow="xl">
      <Box
        background="gray"
        width="100%"
        borderRadius="20px"
        backgroundImage={`url(${data?.cover_photo})`}
        height={{ base: "220px", lg: "250px", "2xl": "280px" }}
        backgroundPosition="top"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        padding="0.8rem"
      >
        <VStack
          width="100%"
          height="100%"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              aria-label="close button"
              icon={<MdOutlineClear color="#fff" />}
              background="#11070F90"
              borderRadius="full"
              size="sm"
              _hover={{ background: "#11070F70" }}
              _active={{ background: "#11070F70" }}
              onClick={closeDetails}
            />
            <Text
              background="#BDADED"
              padding="3px 5px"
              justifyContent="center"
              color="#ffffff"
              fontWeight="300"
              alignItems="center"
              display="flex"
              flexDirection="column"
              borderRadius="full"
            >
              {data?.day}
              <Text fontSize="xs" fontWeight={200}>
                {data?.day_of_week}
              </Text>
            </Text>
          </Box>

          <Box width="100%">
            <Text
              color="#fff"
              fontSize={{ base: "xl", "2xl": "2xl" }}
              fontWeight="500"
            >
              {data?.name}
            </Text>
          </Box>
        </VStack>
      </Box>

      <Box width="100%" height="250px" padding="0.8rem">
        <HStack height="50px">
          <Box width="33.3333333333%">
            <Text
              color="#2E5DB6"
              display="flex"
              alignItems="center"
              gap="6px"
              justifyContent="center"
            >
              <MicrophoneSvg />
              Music
            </Text>
          </Box>

          <Box
            width="33.3333333333%"
            borderLeft="1px solid black"
            borderRight="1px solid black"
          >
            <Text
              color="#2E5DB6"
              display="flex"
              alignItems="center"
              gap="6px"
              justifyContent="center"
            >
              <TagSvg />
              1,000
            </Text>
          </Box>
          <Box width="33.3333333333%">
            <Text
              color="#2E5DB6"
              display="flex"
              alignItems="center"
              gap="6px"
              justifyContent="center"
            >
              <BsClock color="#163A7E" />
              19:00
            </Text>
          </Box>
        </HStack>

        <Text marginTop="2rem" fontSize="sm" color="#fff">
          Jagor Center
        </Text>

        <Center marginTop="3rem">
          <Button
            variant="unstyled"
            display="inline-flex"
            padding="0 1.2rem"
            textDecoration="none"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            backgroundColor="#ffffff"
            position="relative"
            fontSize="md"
            className="group"
            id="buy_ticket_btn"
            type="button"
            color="#030303"
            aria-label="join button"
            width="150px"
            fontWeight="500"
            borderRadius="20px"
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

            <Link href="/" passHref>
              <ChakraLink
                display="flex"
                _hover={{ textDecoration: "none" }}
                alignItems="center"
                position="relative"
                gap="10px"
                _groupHover={{ color: "#ffffff" }}
                transition="all 0.45s ease-Out"
              >
                Join
              </ChakraLink>
            </Link>
          </Button>
        </Center>
      </Box>
    </Box>
  );
}
