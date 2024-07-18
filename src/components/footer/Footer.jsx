import React from "react";
import { Box, Text } from "@chakra-ui/react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <Box mt={56} mb={16}>
      <FooterTop />
      <FooterBottom />
      <Text textAlign={"center"} color={"rgba(141, 150, 178, 1)"}>
        2024 LYNC World  · Terms of service
      </Text>
    </Box>
  );
};

export default Footer;
