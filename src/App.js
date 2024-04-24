import './App.css';
import SideBar from './Component/SideBar';
import Data from './Component/Data';
import { useState } from 'react';


function App() {

  return (
    <div className='div'>
      <SideBar/>
      <Data/>
    </div>
  );
}

export default App;
