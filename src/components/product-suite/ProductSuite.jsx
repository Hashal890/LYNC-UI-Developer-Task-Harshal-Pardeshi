import React from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const ProductSuite = () => {
  return (
    <Box maxW={"1192px"} m={"auto"} mt={24}>
      <Heading textAlign={"center"}>
        Product{" "}
        <Box as={"span"} color={"rgba(76, 201, 240, 1)"} fontWeight={800}>
          Suite
        </Box>
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt={12}
      >
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <ProductCard />
        </GridItem>
        <GridItem>
          <ProductCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductSuite;
