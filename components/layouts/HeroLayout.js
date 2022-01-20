import React from 'react';
import Head from '../Head';
import Hero from '../Hero';
import Nav from '../Nav';
import Footer from '../Footer';
import styled from 'react-emotion';

const StyledSection = styled.section`
  padding: 40px 0;
`;

const HeroLayout = ({ children, title, description }) => (
  <>
    <Head title={title} />
    <Nav />
    <Hero title={title} description={description} />
    <StyledSection>
      {children}
    </StyledSection>
    <Footer />
  </>
);

export default HeroLayout;
