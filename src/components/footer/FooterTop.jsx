import React from "react";
import { Button, Heading, Image, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import FooterBigLogo from "../../assets/navbar-footer/lync-footer-big-logo.png";

const FooterTop = () => {
  return (
    <VStack>
      <Image
        src={FooterBigLogo}
        alt={"footer-bog-logo"}
        maxW={"594px"}
        m={"auto"}
      />
      <Heading maxW={"500px"} m={"auto"} textAlign={"center"}>
        Got a game idea ?
      </Heading>
      <Heading maxW={"500px"} m={"auto"} textAlign={"center"}>
        Let's make it big together !!!
      </Heading>
      <Button
        rightIcon={<FaArrowRight />}
        color={"white"}
        bg={"linear-gradient(205.14deg, #3F37C9 30.04%, #4CC9F0 186.57%)"}
        _hover={{
          bg: "linear-gradient(205.14deg, #3F37C9 30.04%, #4CC9F0 186.57%)",
          color: "white",
        }}
        borderRadius={"20px"}
        fontWeight={400}
        mt={8}
        mb={24}
      >
        Get started
      </Button>
    </VStack>
  );
};

export default FooterTop;
