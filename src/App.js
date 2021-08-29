import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets'

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
