import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  IconButton,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import NavbarLogo from "../../assets/navbar-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const display = useBreakpointValue({ base: "none", md: "flex" });
  const mobileDisplay = useBreakpointValue({ base: "flex", md: "none" });
  const fontSize = useBreakpointValue({ base: "14px", lg: "18px" });
  //   const padding = useBreakpointValue({ base: "8px", md: "16px" });

  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Box
        as={"nav"}
        pos={"fixed"}
        top={8}
        borderRadius={"3rem"}
        backdropFilter={"blur(25px)"}
        p={3}
        px={6}
        w={"90%"}
        bg={
          "linear-gradient(to right, hsla(0, 0%, 85%, 0.07), hsla(0, 0%, 85%, 0.05))"
        }
        border={"2px solid hsla(0, 0%, 100%, 0.15)"}
        zIndex={100}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <IconButton
            display={mobileDisplay}
            icon={isOpen ? <FaTimes /> : <FaBars />}
            aria-label={"Toggle Navigation"}
            onClick={toggleMenu}
            mr={2}
            bg={"transparent"}
            color={"white"}
            _hover={{ bg: "transparent", color: "white" }}
          />
          <Image src={NavbarLogo} alt={"nav-logo"} maxW={"30px"} />
          <IconButton
            icon={<FaArrowRight />}
            display={mobileDisplay}
            borderRadius={"2rem"}
            py={2}
            px={4}
            ml={2}
            bg={"white"}
            color={"black"}
            _hover={{ bg: "white", color: "black" }}
          />
          <HStack
            display={display}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={4}
          >
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              Home
            </Text>
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              Documentation
            </Text>
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              Blogs
            </Text>
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              LYNC Portal
            </Text>
            <Text
              fontWeight={500}
              fontSize={fontSize}
              cursor={"pointer"}
              borderRadius={"2rem"}
              bg={
                "linear-gradient(93deg, rgba(217, 217, 217, 0.07) 32.09%, rgba(217, 217, 217, 0.05) 116.98%)"
              }
              backdropFilter={"blur(150px)"}
              w={"max-content"}
              py={2}
              px={4}
              border={"1px solid rgba(255, 255, 255, 0.21)"}
            >
              Request a demo
            </Text>
          </HStack>
          <Button
            display={display}
            rightIcon={<FaArrowRight />}
            color={"black"}
            bg={"white"}
            _hover={{ bg: "white", color: "white" }}
            borderRadius={"2rem"}
            py={2}
            px={4}
            ml={2}
          >
            Getting Started
          </Button>
        </Flex>
        {isOpen && (
          <VStack display={mobileDisplay} spacing={4} mt={4}>
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              Home
            </Text>
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              Documentation
            </Text>
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              Blogs
            </Text>
            <Text fontWeight={500} fontSize={fontSize} cursor={"pointer"}>
              LYNC Portal
            </Text>
            <Text
              fontWeight={500}
              fontSize={fontSize}
              cursor={"pointer"}
              borderRadius={"2rem"}
              bg={
                "linear-gradient(93deg, rgba(217, 217, 217, 0.07) 32.09%, rgba(217, 217, 217, 0.05) 116.98%)"
              }
              backdropFilter={"blur(150px)"}
              w={"max-content"}
              py={2}
              px={4}
              border={"1px solid rgba(255, 255, 255, 0.21)"}
            >
              Request a demo
            </Text>
            <Button
              rightIcon={<FaArrowRight />}
              color={"black"}
              bg={"white"}
              _hover={{ bg: "white", color: "white" }}
              borderRadius={"2rem"}
              py={2}
              px={4}
              fontSize={fontSize}
            >
              Getting Started
            </Button>
          </VStack>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
