import React, { useContext } from 'react';
import ListItem from './ListItem';
import { ListContext } from '../contexts/ListContext';
import styled from 'styled-components';

const ReadingList = styled.div`
  padding: 1.5rem;
`;

const EmptyList = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const List = () => {
  const { list } = useContext(ListContext);

  return list.length ? (
    <ReadingList>
      {list.map((item: { title: string; link: string; id: string }) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ReadingList>
  ) : (
    <EmptyList>Nothing to read! Hello free time!</EmptyList>
  );
};

export default List;
