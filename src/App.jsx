import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Box
      bg={"linear-gradient(to right, #417aff, #6404ff)"}
      color={"white"}
      h={"100vh"}
    >
      <Navbar />
    </Box>
  );
};

export default App;
