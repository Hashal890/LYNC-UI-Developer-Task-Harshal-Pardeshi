import React from "react";
import { Flex } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Statistics from "./Statistics";

const GrowthAndStats = () => {
  return (
    <Flex
      flexDir={["column", "column", "row"]}
      maxW={"1200px"}
      m={"auto"}
      mt={8}
      gap={4}
    >
      <GameCard />
      <Statistics />
    </Flex>
  );
};

export default GrowthAndStats;
