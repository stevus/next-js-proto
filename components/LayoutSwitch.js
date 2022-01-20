import React from 'react';
import { DefaultLayout, HeroLayout } from './layouts';
import styled from 'react-emotion';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LayoutSwitch = props => {
  const { layout } = props;
  switch (layout) {
    case 'hero':
      return (
        <StyledDiv>
          <HeroLayout {...props} />
        </StyledDiv>
      );
      break;
    default:
      return (
        <StyledDiv>
          <DefaultLayout {...props} />
        </StyledDiv>
      );
  }
};

export default LayoutSwitch;
