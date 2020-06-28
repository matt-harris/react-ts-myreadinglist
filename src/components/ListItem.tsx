import React, { useContext } from 'react';
import { ListContext, IListItem } from '../contexts/ListContext';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fefcf8;
`;

const ItemDetails = styled.div`
  flex: 1;
  order: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Link = styled.a`
  text-decoration: none;
`;

const ItemAction = styled.div`
  order: 2;  
  padding: 0.5rem;
  cursor: pointer;

  &:hover ~ ${ItemDetails} {
      text-decoration: line-through;
    }
  }
`;

const ListItem = (props: { item: IListItem }) => {
  const { item } = props;
  const { dispatch } = useContext(ListContext);

  return (
    <Item>
      <ItemAction onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>X</ItemAction>

      <ItemDetails>
        <Title>{item.title}</Title>
        <Link>{item.link}</Link>
      </ItemDetails>
    </Item>
  );
};

export default ListItem;
