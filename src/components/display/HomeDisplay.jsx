import React from "react";
import { VStack, Text, Box, Image } from "@chakra-ui/react";
import HomeButtons from "./HomeButtons";
import DisplayDivBg from "../../assets/display/display-div-bg.png";
import DisplayBackedByOutline from "../../assets/display/display-backed-by-outline.png";
import DisplayBackedByLogos from "../../assets/display/display-backed-by.png";

const HomeDisplay = () => {
  return (
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={`url(${DisplayDivBg})`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      mt={40}
      pb={20}
    >
      <Text
        textAlign={"center"}
        fontSize={["40px", "40px", "80px"]}
        maxW={"944px"}
        fontWeight={700}
      >
        Launch Your Game on{" "}
        <Box
          as={"span"}
          bgGradient={"linear(94.68deg, #FF0276 2.51%, #7209B7 56.42%)"}
          bgClip={"text"}
          fontWeight={800}
        >
          Web 3.0
        </Box>{" "}
        in Minutes
      </Text>
      <Text
        color={"#DADDD8"}
        fontSize={"20px"}
        maxW={"800px"}
        textAlign={"center"}
      >
        We help game developers to launch their game on Web 3.0, by keeping
        blockchain complexities aside with WebWorld SDKs!
      </Text>
      <HomeButtons />
      <Text mt={20} color={"#DADDD8"} fontSize={"24px"}>
        Backed by
      </Text>
      <Box
        m={8}
        maxW={"660px"}
        backgroundImage={`url(${DisplayBackedByOutline})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      >
        <Image src={DisplayBackedByLogos} alt={"display-backed-by"} />
      </Box>
    </VStack>
  );
};

export default HomeDisplay;
