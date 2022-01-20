import React from 'react';
import styled from 'react-emotion';
import Container from './Container';
import { theme } from '../site.config';

const StyledHero = styled.div`
  height: 50vh;
  background-color: ${theme.colors.primary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 300px;
  &::after {
    content: '';
    background-color: #fff;
    width: 110%;
    position: absolute;
    height: 300px;
    transform-origin: left top;
    transform: rotate(-3deg);
    left: 0;
    top: 100%;
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
  paddin: 0;
  color: #fff;
`;

const StyledDiv = styled.div`
  color: #fff;
`;

const Hero = ({ title, description }) => (
  <StyledHero>
    <Container>
      <StyledH1>{title}</StyledH1>
      <StyledDiv>{description}</StyledDiv>
    </Container>
  </StyledHero>
);

export default Hero;
