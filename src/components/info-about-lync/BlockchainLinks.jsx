import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ZoraVerseLogo from "../../assets/zora-verse-logo.png";
import BornOrDieLogo from "../../assets/born-or-die-logo.png";
import SOMWebsiteLogo from "../../assets/som-website-logo.png";
import LumosLogo from "../../assets/lumos-logo.png";
import VRCompanyLogo from "../../assets/vr-company-logo.png";

const BlockchainLinks = () => {
  return (
    <Box maxW={"1000px"} m={"auto"}>
      <Text
        textAlign={"center"}
        fontSize={["20px", "36px"]}
        fontWeight={600}
        maxW={"500px"}
        m={"auto"}
        pb={8}
      >
        Making blockchain gaming accessible to{" "}
        <Box as={"span"} color={"rgba(76, 201, 240, 1)"} fontWeight={500}>
          everyone!
        </Box>
      </Text>
      <Flex
        wrap={"wrap"}
        gap={8}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={ZoraVerseLogo} alt={"zora-verse"} w={"80px"} h={"50px"} />
        <Image src={BornOrDieLogo} alt={"born-or-die"} w={"80px"} h={"50px"} />
        <Image src={SOMWebsiteLogo} alt={"som-website"} w={"80px"} h={"50px"} />
        <Image src={LumosLogo} alt={"lumos-logo"} w={"80px"} h={"50px"} />
        <Image src={VRCompanyLogo} alt={"vr-company"} w={"80px"} h={"50px"} />
      </Flex>
    </Box>
  );
};

export default BlockchainLinks;
