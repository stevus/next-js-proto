import styled from 'react-emotion';

const StyledContainer = styled.div`
  max-width: 760px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Container = ({ children }) => (
  <StyledContainer className="container">{children}</StyledContainer>
);

export default Container;
