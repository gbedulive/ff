import React from "react";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

export default function General() {
  return (
    <Box mb="2rem">
      <Text
        fontFamily="Inter"
        fontWeight="900"
        fontSize={{ base: "3xl", lg: "4xl" }}
        color="#3a3a3a"
      >
        General
      </Text>

      <Box transform="translateX(-35px)" mt="1rem">
        <Accordion allowToggle>
          <AccordionItem border="none" mb="1.5rem">
            <AccordionButton border="none" _hover={{ bg: "none" }}>
              <AccordionIcon color="#287984" boxSize="30px" />
              <Box
                flex="1"
                textAlign="left"
                color="#3a3a3a"
                ml={{ base: "1rem", lg: "2rem" }}
                fontWeight={200}
              >
                Are refunds available if 2022 Coachella is postponed or
                canceled?
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4} ml="4rem" maxWidth="700px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton border="none" _hover={{ bg: "none" }}>
              <AccordionIcon color="#287984" boxSize="30px" />
              <Box
                flex="1"
                textAlign="left"
                color="#3a3a3a"
                ml={{ base: "1rem", lg: "2rem" }}
                fontWeight={200}
              >
                What Covid-19 safety precautions will be taken at the festival?
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4} ml="4rem" maxWidth="700px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
