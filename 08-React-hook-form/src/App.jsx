import React, { useState } from 'react'
import Navbar from './assets/Components/Navbar'
import Card from "./assets/Components/Card"
import Form from "./assets/Components/Form"

const App = () => {

const [toggle, setToggle] = useState(false)
 const [user, setUser] = useState([])
 console.log(user);

 const deleteUser = (id)=>{

  
  setUser(user.filter((elem)=>{
 return elem.id !== id;  
  })
)
 }
 

  return (
    <div className = "h-screen w-full bg-black p-2">
    <Navbar setToggle= {setToggle}/>
    {toggle?  <Form setToggle= {setToggle} setUser= { setUser }/>:
     <div className=" h-[90%] p-5 mt-2 rounded-xl bg-gray-300 w-full">
    {
      user.map((elem)=>{
        return <Card user={elem} 
        deleteUser={deleteUser}
        key ={elem.id} 
        id ={elem.id} 
        setToggle={setToggle}/>
      })
    }
     </div>
    }

   
   
    </div>
  )
}

export default App
