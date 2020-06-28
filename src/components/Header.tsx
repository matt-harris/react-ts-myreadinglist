import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../contexts/ListContext';

const Navbar = styled.header`
  padding: 1rem 1.5rem;
  text-align: center;
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 700;

  &:before,
  &:after {
    content: '';
    width: 2rem;
    border-top: #e3dccf 0.25rem solid;
  }

  &:before {
    margin-right: 0.5rem;
  }

  &:after {
    margin-left: 0.5rem;
  }
`;

const Header = () => {
  const { list } = useContext(ListContext);

  return (
    <Navbar>
      <Logo>MyReadingList</Logo>
      <p>Currently you have {list?.length} items to read.</p>
    </Navbar>
  );
};

export default Header;
