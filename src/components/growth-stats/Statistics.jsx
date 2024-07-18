import React from "react";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import GameStatistics from "../../assets/growth-stats/game-statistics.png";

const Statistics = () => {
  return (
    <Flex flexDir={["column", "column", "row"]} gap={2}>
      <VStack justifyContent={"space-between"} gap={2}>
        <Box h={"48%"} border={"1px solid grey"} p={4} borderRadius={"32px"} w={"100%"}>
          <Heading color={"rgba(76, 201, 240, 1)"}>200+</Heading>
          <Text mt={4} color={"rgba(141, 150, 178, 1)"} fontSize={"18px"}>
            Projects have downloaded & integrated LYNC SDKs
          </Text>
        </Box>
        <Box h={"48%"} border={"1px solid grey"} p={4} borderRadius={"32px"} w={"100%"}>
          <Heading color={"rgba(255, 2, 118, 1)"}>8000+</Heading>
          <Text mt={4} color={"rgba(141, 150, 178, 1)"} fontSize={"18px"}>
            Contracts have been deployed via LYNC
          </Text>
        </Box>
      </VStack>
      <Box p={4} border={"1px solid grey"} borderRadius={"32px"}>
        <Heading color={"rgba(76, 201, 240, 1)"}>50000+</Heading>
        <Text mt={4} color={"rgba(141, 150, 178, 1)"} fontSize={"18px"}>
          User ops created in 10 hours
        </Text>
        <Image src={GameStatistics} alt={"game-stats"} />
      </Box>
    </Flex>
  );
};

export default Statistics;
