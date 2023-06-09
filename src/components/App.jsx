import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Components 
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          
        </Routes>
      </BrowserRouter>
    </div>  )
}


