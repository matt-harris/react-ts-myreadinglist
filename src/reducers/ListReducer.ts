import { v4 as uuidv4 } from 'uuid';
// import { IListItem } from '../contexts/ListContext';

export const ListReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          title: action.item.title,
          link: action.item.link,
          id: uuidv4(),
        },
      ];
    case 'REMOVE_ITEM':
      return state.filter((item: any) => item.id !== action.id);
    case 'REORDER_ITEM':
      const newItems = [...state];
      const item = newItems[action.item.source.index];
      newItems.splice(action.item.source.index, 1);
      newItems.splice(action.item.destination.index, 0, item);
      return newItems;
    default:
      return state;
  }
};
