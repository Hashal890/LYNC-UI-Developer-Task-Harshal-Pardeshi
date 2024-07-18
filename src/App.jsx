import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import HomeDisplay from "./components/display/HomeDisplay";
import InfoAboutLync from "./components/info-about-lync/InfoAboutLync";
import PowerupWeb3 from "./components/powerup/PowerupWeb3";
import GrowthAndStats from "./components/growth-stats/GrowthAndStats";
import ProductSuite from "./components/product-suite/ProductSuite";
import BuiltCompanyChain from "./components/company-chain/BuiltCompanyChain";
import TelegramConnect from "./components/telegram-connect/TelegramConnect";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Box
      bg={"rgba(2, 6, 23, 1)"}
      color={"white"}
      fontFamily={"Sofia Sans Semi Condensed, sans-serif"}
      p={2}
    >
      <Navbar />
      <HomeDisplay />
      <InfoAboutLync />
      <PowerupWeb3 />
      <GrowthAndStats />
      <ProductSuite />
      <BuiltCompanyChain />
      <TelegramConnect />
      <Partners />
      <Footer />
    </Box>
  );
};

export default App;
