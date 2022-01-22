import React  , {useState, useEffect} from 'react';
import './App.css';
import Item from "./components/Item"
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

     <NavBar></NavBar>
    <ItemListContainer />
    </div>
  );
}

export default App;
