import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  padding: 1rem 1.5rem;
  text-align: center;

  a {
    color: inherit;
  }
`;

const Footer = () => (
  <FooterBar>
    Made by{' '}
    <a href='https://twitter.com/matty_h' rel='noopener noreferrer' target='_blank'>
      @matty_h
    </a>
  </FooterBar>
);

export default Footer;
