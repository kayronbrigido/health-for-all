import React from 'react';
import './App.css';
import { translator } from './utils/translator';
import i18n from './i18n';
import HandleLanguage from './components/HandleLanguage';

const App = () => {
  return(
    <>
    <HandleLanguage />
    <p>{translator('MENU_BAR.HOME')}</p>
    </>
  )
}
export default App;
