import React, { useContext } from 'react';
import { ListContext } from '../contexts/ListContext';
import styled from 'styled-components';

const Item = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: #e3dccf;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
    text-decoration: line-through;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Link = styled.a`
  text-decoration: none;
`;

const ListItem = (props: {
  item: {
    title: string;
    link: string;
    id: string;
  };
}) => {
  const { item } = props;
  const { dispatch } = useContext(ListContext);

  return (
    <Item onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>
      <Title>{item.title}</Title>
      <Link>{item.link}</Link>
    </Item>
  );
};

export default ListItem;
