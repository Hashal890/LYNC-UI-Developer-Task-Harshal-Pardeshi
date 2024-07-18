import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import HomeDisplay from "./components/display/HomeDisplay";
import InfoAboutLync from "./components/info-about-lync/InfoAboutLync";
import PowerupWeb3 from "./components/powerup/PowerupWeb3";
import GrowthAndStats from "./components/growth-stats/GrowthAndStats";

const App = () => {
  return (
    <Box
      bg={"linear-gradient(to right, #417aff, #6404ff)"}
      color={"white"}
      fontFamily={"Sofia Sans Semi Condensed, sans-serif"}
      p={2}
    >
      <Navbar />
      <HomeDisplay />
      <InfoAboutLync />
      <PowerupWeb3 />
      <GrowthAndStats />
    </Box>
  );
};

export default App;
