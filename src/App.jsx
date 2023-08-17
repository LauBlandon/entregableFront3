import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card';

function App() {
  const [usuarios, setUsuarios]=useState([]);

  const addUsuario = (usuario) =>{
    setUsuarios([usuario])
  };

  return (
    <div className='App'>
      <h2>Serie favorita</h2>
      <Form onAddUsuario={addUsuario}/>
      <Card usuarios={usuarios}/>
    </div>
  )
}

export default App
