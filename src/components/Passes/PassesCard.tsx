import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export function ExplorerCard() {
  return (
    <Box>
      <Box
        boxShadow="md"
        borderRadius="20px"
        height="430px"
        maxW="300px"
        background="linear-gradient(150.73deg, #FCC3F2 -1.1%, #7BA2C3 100.5%)"
        p="1rem"
      >
        <VStack spacing={0} justifyContent="space-between" height="100%">
          <Box>
            <Heading textAlign="center">Explorer</Heading>

            <Text
              textAlign="center"
              fontWeight={400}
              fontSize="sm"
              color="#717171"
            >
              Daily Pass
            </Text>
          </Box>

          <Box>
            <Image src="/images/daily_pass.png" alt="" />
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <Heading fontWeight={700} fontSize="3xl">
              ₦ 30,000
            </Heading>

            <Button
              variant="solid"
              color="#fff"
              borderRadius="15px"
              fontWeight="400"
              backgroundColor="#000"
              height="40px"
              width="70px"
              _hover={{ color: "#3a3a3a", bg: "#f1f1f1" }}
            >
              Buy
            </Button>
          </Box>
        </VStack>
      </Box>

      <Box maxW="300px" mt="1.5rem">
        <Text fontWeight={400}>
          Allows entrance to the Venue and Day Parking lots all three days. GA
          Pass holders may visit the GA camping areas.
        </Text>

        <UnorderedList mt="10px">
          <ListItem>Limit four (4) passes. (per weekend)</ListItem>
          <ListItem>Wristband registration required.</ListItem>
          <ListItem>Wristband void if tampered or removed.</ListItem>
          <ListItem>Valid for all three [3] days.</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export function AdventurerCard() {
  return (
    <Box>
      <Box
        boxShadow="md"
        borderRadius="20px"
        height="430px"
        maxW="300px"
        background="linear-gradient(159.7deg, #FBD85E 12.55%, #66E700 114.08%)"
        p="1rem"
      >
        <VStack spacing={0} justifyContent="space-between" height="100%">
          <Box>
            <Heading textAlign="center">Adventurer</Heading>

            <Text
              textAlign="center"
              fontWeight={400}
              fontSize="sm"
              color="#717171"
            >
              All Days Pass
            </Text>
          </Box>

          <Box>
            <Image src="/images/all_days_pass.png" alt="" />
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <Heading fontWeight={700} fontSize="3xl">
              ₦ 30,000
            </Heading>

            <Button
              variant="solid"
              color="#fff"
              borderRadius="15px"
              fontWeight="400"
              backgroundColor="#000"
              height="40px"
              width="70px"
              _hover={{ color: "#3a3a3a", bg: "#f1f1f1" }}
            >
              Buy
            </Button>
          </Box>
        </VStack>
      </Box>

      <Box maxW="300px" mt="1.5rem">
        <Text fontWeight={400}>
          Allows entrance to the Venue and Day Parking lots all three days. GA
          Pass holders may visit the GA camping areas.
        </Text>

        <UnorderedList mt="10px">
          <ListItem>Limit four (4) passes. (per weekend)</ListItem>
          <ListItem>Wristband registration required.</ListItem>
          <ListItem>Wristband void if tampered or removed.</ListItem>
          <ListItem>Valid for all three [3] days.</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
