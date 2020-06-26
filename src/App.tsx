import React from 'react';
import ListContextProvider from './contexts/ListContext';
import Header from './components/Header';
import List from './components/List';
import ListForm from './components/ListForm';
import Footer from './components/Footer';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';

const Container = styled.div`
  max-width: 44rem;
  margin: 1.5rem auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div className='App'>
        <ListContextProvider>
          <Container>
            <Header />
            <List />
            <ListForm />
            <Footer />
          </Container>
        </ListContextProvider>
      </div>
    </>
  );
}

export default App;
