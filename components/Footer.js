import React from 'react';
import styled from 'react-emotion';
import Container from './Container';

const StyledDiv = styled.footer`
  background-color: #f5f5f5;
  padding: 115px 0 40px;
  margin-top: auto;
  position: relative;
  overflow: hidden;
  text-align: center;
  &::before {
    content: '';
    background-color: #fff;
    width: 110%;
    position: absolute;
    height: 300px;
    transform-origin: left bottom;
    transform: rotate(3deg);
    bottom: 100%;
    left: 0;
  }
`;

const Footer = () => (
  <StyledDiv>
    <Container>
      <p>Built by <a href="https://twitter.com/RobSkidmoreMe">@RobSkidmoreMe</a></p>
    </Container>
  </StyledDiv>
);

export default Footer;
