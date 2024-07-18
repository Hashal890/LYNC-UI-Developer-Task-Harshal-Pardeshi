import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import GameCardBg from "../../assets/game-card-bg.png";
import GameRemote from "../../assets/game-remote.png";

const GameCard = () => {
  return (
    <Flex
      border={"1px solid"}
      borderRadius={"32px"}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgGradient={GameCardBg}
    >
      <Box>
        <Text color={"rgba(255, 255, 255, 1)"} fontSize={"24px"}>
          Elevate Your Gameplay with Essential Insights!
        </Text>
        <Text color={"rgba(141, 150, 178, 1)"} fontSize={"16px"} mt={4}>
          Unleash Your Potential - Explore the Knowledge Hub Today!
        </Text>
        <Button
          bg={"white"}
          color={"black"}
          _hover={{ bg: "white", color: "black" }}
          borderRadius={"30px"}
          rightIcon={<FaArrowRightLong />}
          mt={8}
        >
          View docs
        </Button>
      </Box>
      <Image src={GameRemote} alt={"game-remote"} />
    </Flex>
  );
};

export default GameCard;
