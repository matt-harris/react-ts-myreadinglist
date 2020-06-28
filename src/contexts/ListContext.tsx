import React, { createContext, ReactNode, useReducer, useEffect } from 'react';
import { ListReducer } from '../reducers/ListReducer';

export interface IListContext {
  list: IListItem[];
  dispatch: React.Dispatch<any>;
}

export interface IListItem {
  title: string;
  link: string;
  id: string;
}

export const ListContext = createContext<IListContext>({ list: [], dispatch: () => null });

const ListContextProvider = (props: { children: ReactNode }) => {
  const [list, dispatch] = useReducer(ListReducer, [], () => {
    const localData = localStorage.getItem('myReadingList');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => localStorage.setItem('myReadingList', JSON.stringify(list)), [list]);

  return <ListContext.Provider value={{ list, dispatch }}>{props.children}</ListContext.Provider>;
};

export default ListContextProvider;
