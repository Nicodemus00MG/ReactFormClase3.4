
import './App.css'

import { useState } from 'react'
import FormSubmit from './components/FormSubmit'

function App() {
 
const [search,setSearch]=useState('')


const handdleInput=(e)=>{
setSearch(e.target.value)
}

if(search==="hola mundo"){
  setSearch("aqui todos seteando el input")
}


  return (
    <div className="App">
     <h2>Form</h2>
     <input type="text" onChange={handdleInput} value={search}/>
       <h3>Valor del search: {search}</h3>

       <br />
       <br />
       <hr />
       <FormSubmit/>
    </div>
  )
}

export default App
