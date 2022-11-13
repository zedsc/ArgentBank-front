import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Hero from "../components/Hero";
import axios from "axios";
import Asset from "../components/Asset";
import Footer from "../components/Footer";

const SrTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const AssetsSection = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const Home = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get("assetsItems.json").then((result) => setAssets(result.data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AssetsSection>
          <SrTitle>Features</SrTitle>
          {assets.map((asset, index) => (
            <Asset key={index} item={asset} />
          ))}
        </AssetsSection>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
