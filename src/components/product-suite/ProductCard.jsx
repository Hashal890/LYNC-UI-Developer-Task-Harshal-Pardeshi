import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import ProductCardImage from "../../assets/product-card-image.png";

const ProductCard = () => {
  return (
    <Box
      borderRadius={"20px"}
      bg={
        "linear-gradient(180deg, rgba(2, 6, 23, 0) 16.98%, rgba(2, 6, 23, 0.8) 66.5%)"
      }
      p={"45px 22px 45px 22px"}
      h={"404px"}
      w={"304px"}
      cursor={"pointer"}
      border={"1px solid grey"}
    >
      <Image src={ProductCardImage} alt={"product-card-img"} />
      <Text color={"rgba(255, 255, 255, 1)"} mt={4} fontSize={"24px"}>
        LYNC Wallet SDK
      </Text>
      <Text color={"rgba(141, 150, 178, 1)"} fontSize={"14px"} mt={1}>
        Empowering developers to integrate account abstraction in their game,
        dapp, metaverse and more in minutes.
      </Text>
    </Box>
  );
};

export default ProductCard;
