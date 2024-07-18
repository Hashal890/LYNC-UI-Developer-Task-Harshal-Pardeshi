import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import EthereumLogo from "../../assets/ethereum-logo.png";
import PolygonLogo from "../../assets/polygon-logo.png";
import AptosLogo from "../../assets/aptos-logo.png";
import ZkSyncLogo from "../../assets/zksync-logo.png";
import ShardeumLogo from "../../assets/shardeum-logo.png";
import AstarLogo from "../../assets/astar-logo.png";
import SagaLogo from "../../assets/saga-logo.png";
import AvalancheLogo from "../../assets/avalanche-logo.png";

const BuiltCompanyChain = () => {
  return (
    <Box maxW={"600px"} m={"auto"} mt={24}>
      <Heading textAlign={"center"} maxW={"500px"} m={"auto"}>
        With LYNC, build on your{" "}
        <Box as={"span"} color={"rgba(76, 201, 240, 1)"} fontWeight={800}>
          favorite chain.
        </Box>
      </Heading>
      <Flex
        flexWrap={"wrap"}
        gap={4}
        mt={8}
        justifyContent={"center"}
        alignItems={"center"}
        p={4}
        border={"1px dashed grey"}
        borderRadius={"20px"}
      >
        <Image
          src={EthereumLogo}
          alt={"ethereum-logo"}
          w={"125px"}
          height={"31px"}
        />
        <Image
          src={PolygonLogo}
          alt={"polygon-logo"}
          w={"125px"}
          height={"31px"}
        />
        <Image src={AptosLogo} alt={"aptos-logo"} w={"125px"} height={"31px"} />
        <Image
          src={ZkSyncLogo}
          alt={"zksync-logo"}
          w={"125px"}
          height={"31px"}
        />
        <Image
          src={ShardeumLogo}
          alt={"shardeum-logo"}
          w={"125px"}
          height={"31px"}
        />
        <Image src={AstarLogo} alt={"astar-logo"} w={"125px"} height={"31px"} />
        <Image src={SagaLogo} alt={"saga-logo"} w={"125px"} height={"31px"} />
        <Image
          src={AvalancheLogo}
          alt={"avalanche-logo"}
          w={"125px"}
          height={"31px"}
        />
      </Flex>
    </Box>
  );
};

export default BuiltCompanyChain;
