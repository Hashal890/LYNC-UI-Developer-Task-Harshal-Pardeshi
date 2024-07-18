import React from "react";
import { Button, VStack, Heading } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";
import TelegramConnectBg from "../../assets/telegram-connect.png";

const TelegramConnect = () => {
  return (
    <VStack
      maxW={"900px"}
      h={"800px"}
      m={"auto"}
      my={24}
      bgImage={TelegramConnectBg}
      bgSize={"cover"}
      bgPosition={"center"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading>Strongest Web3</Heading>
      <Heading color={"rgba(76, 201, 240, 1)"} fontWeight={800}>
        Community
      </Heading>
      <Button
        colorScheme={"telegram"}
        leftIcon={<FaTelegram />}
        borderRadius={"30px"}
      >
        Join Telegram
      </Button>
    </VStack>
  );
};

export default TelegramConnect;
