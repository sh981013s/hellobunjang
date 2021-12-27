import React, { useState } from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './components/Themes';
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
