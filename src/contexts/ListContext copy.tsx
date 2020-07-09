import React, { createContext, useReducer, useEffect } from 'react';
import { ListReducer } from '../reducers/ListReducer';

export interface IList {
  list: IListItem[];
}

export interface IListItem {
  title: string;
  link: string;
  id: string;
}

const initialState = {
  list: [],
};

export const ListContext = createContext<{
  state: IList;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const ListContextProvider = (props: { children?: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ListReducer, [], () => {
    const localData = localStorage.getItem('myReadingList');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => localStorage.setItem('myReadingList', JSON.stringify(state)), [state]);

  return <ListContext.Provider value={{ state, dispatch }}>{props.children}</ListContext.Provider>;
};

export default ListContextProvider;
