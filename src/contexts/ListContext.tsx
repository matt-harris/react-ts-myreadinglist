import React, { createContext, useReducer, useEffect } from 'react';
import { ListReducer } from '../reducers/ListReducer';

// export interface IListItem {
//   title: string;
//   link: string;
//   id: string;
//   dispatch: any;
// }

export const ListContext = createContext<any>([]);

const ListContextProvider = (props: { children?: React.ReactNode }) => {
  const [list, dispatch] = useReducer(ListReducer, [], () => {
    const localData = localStorage.getItem('myReadingList');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => localStorage.setItem('myReadingList', JSON.stringify(list)), [list]);

  return <ListContext.Provider value={{ list, dispatch }}>{props.children}</ListContext.Provider>;
};

export default ListContextProvider;
