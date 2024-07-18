import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import FooterSmallLogo from "../../assets/navbar-footer/lync-footer-small-logo.png";
import FooterLinkedIn from "../../assets/navbar-footer/footer-linkedin.png";
import FooterDiscord from "../../assets/navbar-footer/footer-discord.png";
import FooterTwitter from "../../assets/navbar-footer/footer-tweeter.png";
import FooterCard from "./FooterCard";

const FooterBottom = () => {
  const footerData = [
    {
      id: 1,
      title: "Product",
      subComponents: ["SDK’s", "Transfer API’s", "Token API’s", "NFT API’s"],
    },
    {
      id: 2,
      title: "Company",
      subComponents: ["About us", "Press Kit", "Security", "Privacy Policy"],
    },
    {
      id: 3,
      title: "Contact",
      subComponents: ["Email", "Discord", "Telegram", "Press"],
    },
  ];

  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      gap={8}
      flexWrap={"wrap"}
      mb={8}
    >
      <Box>
        <Image
          SRC={FooterSmallLogo}
          alt={"footer-small-logo"}
          w={"134px"}
          h={"34px"}
        />
        <Text mt={2}>A GameFi Infrastructure</Text>
        <Flex justifyContent={"center"} alignItems={"center"} gap={2} mt={4}>
          <Avatar src={FooterLinkedIn} cursor={"pointer"} />
          <Avatar src={FooterDiscord} cursor={"pointer"} />
          <Avatar src={FooterTwitter} cursor={"pointer"} />
        </Flex>
      </Box>
      <Flex
        justifyContent={"space-around"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={4}
      >
        {footerData.map((elem) => (
          <FooterCard key={elem.id} {...elem} />
        ))}
      </Flex>
      <Box>
        <Text fontSize={"24px"} color={"rgba(255, 255, 255, 1)"}>
          Supercharge your inbox
        </Text>
        <Text fontSize={"16px"} color={"rgba(141, 150, 178, 1)"} mt={2}>
          Sign up for our newsletter
        </Text>
        <InputGroup mt={4} borderRadius={"30px"} w={"250px"}>
          <Input
            placeholder={"enter you email address"}
            borderRadius={"30px"}
            bg={
              "linear-gradient(92.98deg, rgba(217, 217, 217, 0.07) 32.09%, rgba(217, 217, 217, 0.05) 116.98%)"
            }
          />
          <InputRightElement width={"4.5rem"}>
            <Button
              h={"1.75rem"}
              size={"sm"}
              bgGradient="linear-gradient(205.14deg, #3F37C9 30.04%, #4CC9F0 186.57%)"
              color={"white"}
              _hover={{
                bgGradient:
                  "linear-gradient(205.14deg, #3F37C9 30.04%, #4CC9F0 186.57%)",
                color: "white",
              }}
              borderRadius="20px"
              fontWeight={400}
            >
              Submit
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default FooterBottom;
