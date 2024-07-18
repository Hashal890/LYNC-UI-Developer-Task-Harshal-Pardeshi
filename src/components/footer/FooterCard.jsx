import { Box, Text } from "@chakra-ui/react";
import React from "react";

const FooterCard = ({ title, subComponents }) => {
  return (
    <Box>
      <Text fontSize={"18px"} color={"rgba(255, 255, 255, 1)"} mb={4}>
        {title}
      </Text>
      {subComponents.map((component, index) => (
        <Text
          key={index}
          fontSize={"14px"}
          color={"rgba(141, 150, 178, 1)"}
          mb={2}
        >
          {component}
        </Text>
      ))}
    </Box>
  );
};

export default FooterCard;
