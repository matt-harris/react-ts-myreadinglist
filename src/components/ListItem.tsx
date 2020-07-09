import React, { useContext } from 'react';
import { ListContext, IListItem } from '../contexts/ListContext';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.secondary};
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
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;

  &:hover ~ ${ItemDetails} {
      text-decoration: line-through;
    }
  }
`;

const ListItem = (props: { item: IListItem; index: number }) => {
  const { item, index } = props;
  const { dispatch } = useContext(ListContext);

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <Item {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <ItemAction onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>X</ItemAction>

          <ItemDetails>
            <Title>{item.title}</Title>
            <Link>{item.link}</Link>
          </ItemDetails>
        </Item>
      )}
    </Draggable>
  );
};

export default ListItem;
