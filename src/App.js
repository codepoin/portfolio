import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './Components/Navbar'
import MainRoute from './Components/Page/MainRoute'
import {Row,Col} from 'antd';

function App() {
  return (
      <div>
        <MainMenu/>
   
        <MainRoute/>
      </div>
  );
}

export default App;
