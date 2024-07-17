import React from "react";
import { Box, Text } from "@chakra-ui/react";

const AboutText = () => {
  return (
    <Box
      maxW={"850px"}
      m={"auto"}
      border={"1px solid"}
      css={{
        borderImageSource:
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 6.2%, #FFFFFF 54.5%, rgba(255, 255, 255, 0) 89.56%)",
        borderImageSlice: 1,
      }}
      p={4}
      mb={12}
      textAlign={"center"}
      fontSize={["18px", "28px"]}
    >
      <Text>
        LYNC provides a scalable infrastructure for launching web3 games,
        without hampering the{" "}
        <Box
          as={"span"}
          color={"rgba(76, 201, 240, 1)"}
          fontWeight={500}
        >
          gaming experience.
        </Box>
      </Text>
      <Text>So that you can deliver the next big hit!</Text>
    </Box>
  );
};

export default AboutText;
