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
  background-color: #fefcf8;
  border: 0;
`;

const Submit = styled.input`
  display: block;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  background-color: #e3dccf;
  border: 0;
  cursor: pointer;
`;

const ListForm = () => {
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
      <TextInput
        type='text'
        value={title}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
        placeholder='Enter item title'
        required
      />
      <TextInput
        type='text'
        value={link}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => setLink(e.currentTarget.value)}
        placeholder='Enter item link'
        required
      />
      <Submit type='submit' value='Add new item' />
    </Form>
  );
};

export default ListForm;
