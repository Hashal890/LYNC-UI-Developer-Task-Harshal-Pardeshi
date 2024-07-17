import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import HomeDisplay from "./components/display/HomeDisplay";
import InfoAboutLync from "./components/info-about-lync/InfoAboutLync";

const App = () => {
  return (
    <Box bg={"linear-gradient(to right, #417aff, #6404ff)"} color={"white"}>
      <Navbar />
      <HomeDisplay />
      <InfoAboutLync />
    </Box>
  );
};

export default App;
