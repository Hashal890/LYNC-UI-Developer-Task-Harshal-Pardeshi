import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import FilecoinLogo from "../../assets/partners/filecoin.png";
import ChainLink from "../../assets/partners/chainlink.png";
import SpheronLogo from "../../assets/partners/spheron.png";
import LonghashXLogo from "../../assets/partners/longhash-x.png";
import AxelarLogo from "../../assets/partners/axelar.png";
import BiconomyLogo from "../../assets/partners/biconomy.png";
import LightHouseStorageLogo from "../../assets/partners/lighthouse-storage.png";
import SIULLogo from "../../assets/partners/siul.png";

const Partners = () => {
  return (
    <Box my={24}>
      <Heading textAlign={"center"}>
        Our{" "}
        <Box as={"span"} color={"rgba(76, 201, 240, 1)"} fontWeight={800}>
          Believers and Partners
        </Box>
        <Flex
          flexWrap={"wrap"}
          borderRadius={"20px"}
          maxW={"1000px"}
          m={"auto"}
          mt={8}
          gap={4}
          p={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={FilecoinLogo}
            alt={"filecoin-logo"}
            w={"226px"}
            height={"105px"}
          />
          <Image
            src={ChainLink}
            alt={"chainlink-logo"}
            w={"226px"}
            height={"105px"}
          />
          <Image
            src={SpheronLogo}
            alt={"spheron-logo"}
            w={"226px"}
            height={"105px"}
          />
          <Image
            src={LonghashXLogo}
            alt={"longhashx-logo"}
            w={"226px"}
            height={"105px"}
          />
          <Image
            src={AxelarLogo}
            alt={"axelar-logo"}
            w={"226px"}
            height={"105px"}
          />
          <Image
            src={BiconomyLogo}
            alt={"biconomy-logo"}
            w={"226px"}
            height={"105px"}
          />
          <Image
            src={LightHouseStorageLogo}
            alt={"lighthouse-storage-logo"}
            w={"226px"}
            height={"105px"}
          />
          <Image
            src={SIULLogo}
            alt={"siul-logo"}
            w={"226px"}
            height={"105px"}
          />
        </Flex>
      </Heading>
    </Box>
  );
};

export default Partners;
