import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ListContextProvider from './contexts/ListContext';
import Header from './components/Header';
import List from './components/List';
import ListForm from './components/ListForm';
import Footer from './components/Footer';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/Theme';

const Container = styled.div`
  max-width: 44rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

function App() {
  const savedTheme = localStorage.getItem('readmeTheme');
  const initialThemeState: boolean = savedTheme === 'true' ? true : false;
  const [readmeTheme, setReadmeTheme] = useState<boolean>(initialThemeState);
  const handleTheme = () => {
    setReadmeTheme(!readmeTheme);
    localStorage.setItem('readmeTheme', JSON.stringify(!readmeTheme));
  };

  return (
    <>
      <ThemeProvider theme={readmeTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className='App'>
          <ListContextProvider>
            <Container>
              <Header isDarkMode={readmeTheme} onClick={handleTheme} />
              <List />
              <ListForm title='Add a new item!' />
              <Footer />
            </Container>
          </ListContextProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
