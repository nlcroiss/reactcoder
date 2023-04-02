import './App.css'
import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
  //Aqui irian los hooks
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Listado de Productos"} />
    </div>  )
}


