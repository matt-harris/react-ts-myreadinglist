import React, { useContext, useState, FormEvent, SyntheticEvent } from 'react';
import { ListContext } from '../contexts/ListContext';
import styled from 'styled-components';

const Form = styled.form`
  padding: 1.5rem;
`;

const TextInput = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  color: ${(props) => props.theme.baseUI};
  font-family: inherit;
  background-color: ${(props) => props.theme.secondary};
  border: 0;

  ::placeholder {
    color: ${(props) => props.theme.baseUI};
  }
`;

const Submit = styled.input`
  display: block;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  font-family: inherit;
  background-color: ${(props) => props.theme.highlight};
  border: 0;
  cursor: pointer;
`;

const ListForm = (props: { title: string }) => {
  const { dispatch } = useContext(ListContext);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', item: { title, link } });
    setTitle('');
    setLink('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>{props.title}</h3>
      <TextInput
        type='text'
        value={title}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
        placeholder='Item title'
        required
      />
      <TextInput
        type='url'
        value={link}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => setLink(e.currentTarget.value)}
        placeholder='Item link e.g. https://www.bbc.co.uk'
        required
      />
      <Submit type='submit' value='Add item' />
    </Form>
  );
};

export default ListForm;
