import Link from 'next/link';
import styled from 'react-emotion';
import { theme } from '../site.config';

const StyledArticle = styled.article`
  margin-bottom: 20px;
  > *:first-child {
    margin-top: 0;
  }
`;

const StyledA = styled.a`
  color: ${theme.colors.primary};
  cursor: pointer;
  position: relative;
  display: inline-block;
  outline: none;
  text-shadow: none;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    max-width: 0;
    color: red;
    border-bottom: 2px solid red;
    content: attr(data-hover);
    -webkit-transition: max-width 0.5s;
    -moz-transition: max-width 0.5s;
    transition: max-width 0.5s;
    white-space: nowrap;
  }
  &:hover {
    text-decoration: none;
    &::before {
      max-width: 100%;
    }
  }
`;

export default ({ title, excerpt, url }) => (
  <StyledArticle>
    <h2>{title}</h2>
    <p>{excerpt}</p>
    <Link as={url} href={`/post?url=${url}`}>
      <StyledA data-hover={'Read more...'}>Read more...</StyledA>
    </Link>
  </StyledArticle>
);
