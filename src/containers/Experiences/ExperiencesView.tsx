import React, { useState, useEffect } from "react";
import { Box, Text, IconButton, HStack, Button } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import ExperienceDetails from "@components/Experience/ExperienceDetails";
import { experincesData } from "@utils/experiences";
import EventCard from "@components/Experience/EventCard";
import Navbar from "@components/Navbar/Navbar";
import ExperienceDetailsMobile from "@components/Experience/ExperienceDetailsMobile";

export default function ExperiencesView() {
  const [gridLgCol, setGridLgCol] = useState("1fr 1fr 1fr");
  const [gridMdCol, setGridMdCol] = useState("1fr 1fr");
  const [detailsDisplay, setDetailsDisplay] = useState("none");
  const [currentDay, setCurrentDay] = useState<any>({});
  const [selectedEvent, setSelectedEvent] = useState<any>();
  const [detailsMobileDisplay, setDetailsMobileDisplay] = useState("none");

  const openDetails = (data: any) => {
    setSelectedEvent(data);
    setDetailsMobileDisplay("block");
    setDetailsDisplay("block");
    setGridLgCol("1fr 1fr");
    setGridMdCol("1fr");
  };

  const closeDetails = () => {
    setDetailsDisplay("none");
    setDetailsMobileDisplay("none");
    setGridLgCol("1fr 1fr 1fr");
    setGridMdCol("1fr 1fr");
  };

  useEffect(() => {
    setCurrentDay(experincesData[0]);
  }, []);

  return (
    <Box
      minHeight="100vh"
      background="linear-gradient(179.39deg, #E2A9F2 -76.64%, #B1B5F4 93.01%)"
    >
      <Box
        display={{
          base: detailsMobileDisplay === "none" ? "block" : "none",
          lg: "block",
        }}
      >
        <Navbar />

        <Box
          maxW="min(100%, 1800px)"
          mx="auto"
          px={{ base: "1rem", lg: "3rem" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
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

          <Box marginTop="2rem" paddingBottom="50px">
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

                {experincesData?.map((item: any) => {
                  const isActive = item.id === currentDay.id;

                  return (
                    <Button
                      key={item.id}
                      variant="unstyled"
                      width="fit-content"
                      textAlign="center"
                      backgroundColor={
                        isActive ? "#2E5DB6" : "rgba(60, 208, 255, 0.18)"
                      }
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
                      onClick={() => {
                        setCurrentDay(item);
                        closeDetails();
                      }}
                      marginBottom="1rem"
                    >
                      {item.day}
                      <Text as="span" fontSize="xs">
                        {item.day_of_week}
                      </Text>
                    </Button>
                  );
                })}
              </Box>

              <Box width="100%">
                <HStack spacing={0} alignItems="flex-start">
                  <Box
                    width={{
                      base: "100%",
                      md: detailsDisplay === "none" ? "100%" : "50%",
                      lg: detailsDisplay === "none" ? "100%" : "65%",
                    }}
                    display="grid"
                    gridTemplateColumns={{
                      base: "1fr",
                      md: gridMdCol,
                      lg: gridLgCol,
                    }}
                    gap="1.5rem"
                    marginRight="1rem"
                  >
                    {currentDay?.events?.map((item: any) => (
                      <React.Fragment key={item.id}>
                        <EventCard openDetails={openDetails} data={item} />
                      </React.Fragment>
                    ))}
                  </Box>

                  <Box
                    display={{ base: "none", md: detailsDisplay }}
                    width={{ md: "50%", lg: "35%" }}
                  >
                    <ExperienceDetails
                      closeDetails={closeDetails}
                      data={selectedEvent}
                    />
                  </Box>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>

      <Box display={{ base: detailsMobileDisplay, md: "none" }}>
        <ExperienceDetailsMobile
          closeDetails={closeDetails}
          data={selectedEvent}
        />
      </Box>
    </Box>
  );
}
