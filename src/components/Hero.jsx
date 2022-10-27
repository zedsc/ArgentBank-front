import React from "react";
import styled from "styled-components";

const HeroBg = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/img/bank-tree.jpeg");
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.div`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const SrTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const HeroText = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <section>
      <HeroBg>
        <HeroContent>
          <SrTitle>Promoted content</SrTitle>
          <Subtitle>No fees.</Subtitle>
          <Subtitle>No minimum deposit.</Subtitle>
          <Subtitle>High interest rates.</Subtitle>
          <HeroText>Open a savings account with Argent Bank today!</HeroText>
        </HeroContent>
      </HeroBg>
    </section>
  );
};

export default Hero;
