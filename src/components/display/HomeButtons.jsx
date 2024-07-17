import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const HomeButtons = () => {
  return (
    <ButtonGroup gap={4} mt={6}>
      <Button
        rightIcon={<FaArrowRight />}
        color={"white"}
        bg={"linear-gradient(205.14deg, #3F37C9 30.04%, #4CC9F0 186.57%)"}
        _hover={{
          bg: "linear-gradient(205.14deg, #3F37C9 30.04%, #4CC9F0 186.57%)",
          color: "white",
        }}
        borderRadius={"20px"}
      >
        Get started
      </Button>
      <Button
        rightIcon={<FaArrowRight />}
        color={"white"}
        bg={"transparent"}
        _hover={{ bg: "transparent", color: "white" }}
      >
        View Docs
      </Button>
    </ButtonGroup>
  );
};

export default HomeButtons;
