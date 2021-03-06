import React, { useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem';
import { ListContext, IListItem } from '../contexts/ListContext';
import styled from 'styled-components';

const ReadingList = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
`;

const EmptyList = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const List = () => {
  const { list, dispatch } = useContext(ListContext);
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.draggableId === source.draggableId && destination.index === source.index)
      return;

    dispatch({ type: 'REORDER_ITEM', item: { destination, source, draggableId } });
  };

  return list.length ? (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='id'>
        {(provided) => (
          <ReadingList ref={provided.innerRef} {...provided.droppableProps}>
            {list.map((item: IListItem, index) => (
              <ListItem item={item} key={item.id} index={index} />
            ))}
            {provided.placeholder}
          </ReadingList>
        )}
      </Droppable>
    </DragDropContext>
  ) : (
    <EmptyList>Nothing to read! Add items to your Readme list!</EmptyList>
  );
};

export default List;
