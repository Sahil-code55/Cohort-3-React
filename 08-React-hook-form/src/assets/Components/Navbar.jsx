import React from 'react'

function Navbar({setToggle}) {
  return (
   <nav className= " bg-mauve-100 rounded-4xl flex items-center  px-4  py-2 justify-between">
    <div className= "h-13 flex items-center justify-center w-13 rounded-3xl bg-gray-300 border-2"> <h1 className="text-3xl font-black text-blue-950">S</h1></div>
    <div className="centerText flex gap-5 text-xl underline ">
    <a className ="hover:text-blue-600  active:-translate-y-1" href="">Home</a>
    <a className ="hover:text-blue-600 active:-translate-y-1" href="">Card</a>
    <a className ="hover:text-blue-600 active:-translate-y-1" href="">Form</a>

    </div>
    <button 
    onClick={()=>{setToggle((prev)=>!prev)}} 
    className="px-3 py-2 text-white rounded-4xl  active:translate-y-[-1px]  bg-blue-500">Create User</button>
   </nav>
  )
}

export default Navbar