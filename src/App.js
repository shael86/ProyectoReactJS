
import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/'element= {<ItemListContainer greeting='Bienvenidos a mi E-commerce'/>}/>
          <Route path='/category/:id'element= {<ItemListContainer/>}/>
          <Route path='/item/:id'element= {<ItemDetailContainer/>}/>
          <Route path='*'element= {<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
