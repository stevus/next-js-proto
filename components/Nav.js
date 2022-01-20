import React from 'react';
import Link from 'next/link';
import styled from 'react-emotion';
import { theme } from '../site.config';

const links = [
  { href: '/', label: 'Home' },
  { href: '/styles', label: 'Styles' },
  { href: '/landing-page-with-content', label: 'Landing Page w/ Content' },
  { href: '/landing-page-with-component', label: 'Landing Page w/ Component' },
  { href: '/page', label: 'Page' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  background-color: ${theme.colors.primary};
`;

const StyledLi = styled.li`
  margin: 0;
  font-family: 'Open Sans';
  &:last-child {
    margin-left: auto;
  }
`;

const StyledA = styled.a`
  cursor: pointer;
  font-weight: bold;
  padding: 10px 16px;
  display: flex;
  color: #fff;
  &:hover {
    text-decoration: none;
  }
`;

const Nav = () => (
  <nav>
    <StyledUl>
      {links.map(({ key, href, label }) => (
        <StyledLi key={key}>
          <Link href={href} passHref>
            <StyledA>{label}</StyledA>
          </Link>
        </StyledLi>
      ))}
    </StyledUl>
  </nav>
);

export default Nav;
