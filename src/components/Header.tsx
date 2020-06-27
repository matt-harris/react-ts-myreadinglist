import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../contexts/ListContext';

const Navbar = styled.header`
  padding: 1rem 1.5rem;
  text-align: center;
`;

const Logo = styled.h1`
  margin: 1rem 0;
`;

const Header = () => {
  const { state } = useContext(ListContext);
  const { list } = state;

  return (
    <Navbar>
      <Logo>Reading List</Logo>
      <p>Currently you have {list?.length} items to read.</p>
    </Navbar>
  );
};

export default Header;
