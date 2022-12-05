import { Box, Text, VStack } from "@chakra-ui/react";

export default function EventCard({
  openDetails,
  data,
}: {
  openDetails: (data: any) => void;
  data: any;
}) {
  return (
    <Box
      className="fade_in"
      borderRadius="20px"
      boxShadow="xl"
      width="100%"
      height={{ base: "220px", lg: "250px", "2xl": "280px" }}
      backgroundImage={`linear-gradient(180.46deg, rgba(236, 220, 229, 0) 25.17%, #545862 99.59%), url(${data.cover_photo})`}
      backgroundPosition="top"
      backgroundSize="cover"
      padding="0.8rem"
      backgroundRepeat="no-repeat"
      cursor="pointer"
      transition="all 0.7s"
      _hover={{
        transform: "scale(1.03, 1.03)",
      }}
      onClick={() => openDetails(data)}
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
          {data.time}
          <Text fontSize="xs" fontWeight={200}>
            {data.time_type}
          </Text>
        </Text>

        <Box width="100%">
          <Text
            color="#fff"
            fontSize={{ base: "xl", "2xl": "2xl" }}
            fontWeight="300"
          >
            {data.name}
          </Text>

          <Text
            color="#b8b8b8"
            fontSize={{ base: "xs", "2xl": "sm" }}
            fontWeight={300}
          >
            {data.venue}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
