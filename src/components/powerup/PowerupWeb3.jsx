import React from "react";
import { Box, List, ListIcon, ListItem, Text, chakra } from "@chakra-ui/react";
import Powerweb3Pointer from "../../assets/power-web3-pointer.png";

const PowerupWeb3 = () => {
  const Powerweb3PointerIcon = chakra("img", {
    shouldForwardProp: (prop) => ["src", "alt"].includes(prop),
  });

  return (
    <Box mt={20}>
      <Text
        fontSize={["20px", "42px"]}
        maxW={"760px"}
        m={"auto"}
        textAlign={"center"}
      >
        Power Up Your Web3 Game Development, With{" "}
        <Box
          as={"span"}
          bgGradient={
            "linear-gradient(94.68deg, #FF0276 2.51%, #7209B7 86.36%)"
          }
          bgClip={"text"}
          fontWeight={800}
        >
          LYNC SDKs
        </Box>
      </Text>
      <Text
        maxW={"600px"}
        m={"auto"}
        textAlign={"center"}
        mt={2}
        fontSize={"20px"}
      >
        LYNC SDKs can be easily integrated into game engines like Unity 3D and
        Unreal Engine in a few clicks.
      </Text>
      <Box
        maxW={"1000px"}
        m={"auto"}
        mt={16}
        p={[4, 8]}
        pl={[4, 20]}
        border={"1px solid"}
        borderRadius={"20px"}
      >
        <Text fontSize={["20px", "30px"]}>
          Don't Worry about the{" "}
          <Box
            as={"span"}
            bgGradient={
              "linear-gradient(94.68deg, #FF0276 2.51%, #7209B7 86.36%)"
            }
            bgClip={"text"}
            fontWeight={800}
          >
            Web3
          </Box>{" "}
          Complexities
        </Text>
        <List spacing={3} mt={6}>
          <ListItem>
            <ListIcon
              as={Powerweb3PointerIcon}
              src={Powerweb3Pointer}
              alt="Powerweb3 Pointer"
              boxSize={6}
            />
            Save 9-12 months of development time
          </ListItem>
          <ListItem>
            <ListIcon
              as={Powerweb3PointerIcon}
              src={Powerweb3Pointer}
              alt="Powerweb3 Pointer"
              boxSize={6}
            />
            Focus completely on Game Dev and Mechanics
          </ListItem>
          <ListItem>
            <ListIcon
              as={Powerweb3PointerIcon}
              src={Powerweb3Pointer}
              alt="Powerweb3 Pointer"
              boxSize={6}
            />
            Save Up to $500K+ on Salaries & Smart Contract Auditing
          </ListItem>
          <ListItem>
            <ListIcon
              as={Powerweb3PointerIcon}
              src={Powerweb3Pointer}
              alt="Powerweb3 Pointer"
              boxSize={6}
            />
            Go Cross-Chain in a few clicks
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default PowerupWeb3;
