import React from 'react'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <NavBar/> 
      <ItemListContainer greeting="Saludos a todos!!" />
    </>
  )
}

export default App
