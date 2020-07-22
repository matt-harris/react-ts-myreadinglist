import React, { useContext } from 'react';
import { ListContext, IListItem } from '../contexts/ListContext';
import { Draggable } from 'react-beautiful-dnd';
import { ReactComponent as dragSVG } from '../assets/drag.svg';
import styled, { css } from 'styled-components';

const Item = styled.div.attrs((props: { ['data-is-dragging']: boolean }) => ({
  isDragging: props['data-is-dragging'],
}))`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${(props) => (props.isDragging ? props.theme.alt : props.theme.secondary)};
  ${(props) =>
    props.isDragging &&
    css`
      transition: all 0.2s ease-in-out;
      box-shadow: 0px 0px 4px 0px ${props.theme.baseUI};
    `}
`;

const ItemDrag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const DragIcon = styled(dragSVG)`
  fill: ${(props) => props.theme.baseUI};
  width: 1.375rem;
  height: 1.375rem;
  backface-visibility: hidden;
  overflow: hidden;
  vertical-align: middle;
`;

const ItemDetails = styled.div`
  flex: 1;
  order: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ItemAction = styled.div`
  order: 2;  
  padding: 1rem;
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
      {(provided, snapshot) => (
        <Item
          {...provided.draggableProps}
          ref={provided.innerRef}
          data-is-dragging={snapshot.isDragging}
        >
          <ItemDrag {...provided.dragHandleProps}>
            <DragIcon />
          </ItemDrag>
          <ItemAction onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}>X</ItemAction>

          <ItemDetails>
            <Link href={item.link} rel='noopener noreferrer' target='_blank'>
              <Title>{item.title}</Title>
              {item.link}
            </Link>
          </ItemDetails>
        </Item>
      )}
    </Draggable>
  );
};

export default ListItem;
