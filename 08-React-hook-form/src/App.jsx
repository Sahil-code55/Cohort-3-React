import React, { useState } from 'react'
import Navbar from './assets/Components/Navbar'
import Card from "./assets/Components/Card"
import Form from "./assets/Components/Form"

const App = () => {

const [toggle, setToggle] = useState(false)
 const [user, setUser] = useState(()=>{ 
 return JSON.parse(localStorage.getItem("users")) || [];
 })
 
const [updateUser, setUpdateUser] = useState(null)

 const deleteUser = (id)=>{
 let filterUser = user.filter((elem)=>{
 return elem.id !== id;  
  })

  setUser(filterUser)
  localStorage.setItem("users",JSON.stringify(filterUser))
 }
 

  return (
    <div className = "h-screen w-full bg-black p-2">
    <Navbar setToggle= {setToggle}/>
    {toggle?  <Form
    updateUser= {updateUser}
     setToggle= {setToggle} 
    setUser= { setUser }
    user = {user}
    />:
     <div className=" h-[90%] flex flex-wrap gap-5 p-5 mt-2 rounded-xl bg-gray-300 w-full">
    {
      user.map((elem)=>{
        return <Card
         user={elem} 
         setUpdateUser={setUpdateUser}
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
