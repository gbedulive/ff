import { Box, Text, Image, HStack, Link as ChakraLink } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";

const socials = [
  {
    icon: <FaFacebookF />,
    link: "",
  },
  {
    icon: <FaTwitter />,
    link: "",
  },
  {
    icon: <FaInstagram />,
    link: "",
  },
  {
    icon: <FaYoutube />,
    link: "",
  },
  {
    icon: <FaSnapchatGhost />,
    link: "",
  },
  {
    icon: <FaDiscord />,
    link: "",
  },
];

export default function FooterView() {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        h="100%"
        w="100%"
        left="0px"
        right="0px"
        maxW="min(100%, 1800px)"
        mx="auto"
        px={{ base: "1rem", lg: "3rem" }}
      >
        <Box position="relative">
          <HStack
            justifyContent="space-between"
            width="100%"
            top="70px"
            position="absolute"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Box mb={{ base: "2rem", lg: "0rem" }}>
              <Link href="/" passHref>
                <Image
                  mx={{ base: "auto", lg: "0" }}
                  src="/images/future_fest_footer_logo.svg"
                  alt="Future Fest Logo"
                  boxSize={{ base: "100px", lg: "140px" }}
                />
              </Link>
              <Text
                fontWeight={300}
                fontSize="sm"
                textAlign={{ base: "center" }}
              >
                © 2022 Urbanerd Digital Company
              </Text>
            </Box>

            <Box display="flex" alignItems="center">
              {socials.map(({ icon, link }: any) => {
                return (
                  <ChakraLink
                    mr="1.4rem"
                    border="1px solid #222222"
                    padding="10px"
                    borderRadius="50%"
                    key={icon}
                    href={link}
                  >
                    {icon}
                  </ChakraLink>
                );
              })}
            </Box>
          </HStack>
        </Box>
      </Box>

      <Image
        src="/images/footer_background.png"
        alt=""
        width="100vw"
        height="600px"
      />
    </Box>
  );
}
