import React from 'react';
import Head from '../Head';
import Nav from '../Nav';
import Footer from '../Footer';
import styled from 'react-emotion';

const StyledSection = styled.section`
  padding: 40px 0;
`;

const DefaultLayout = ({ banner, children, title }) => (
  <>
    <Head title={title} />
    <Nav />
    <StyledSection>
      {children}
    </StyledSection>
    <Footer />
  </>
);

export default DefaultLayout;
