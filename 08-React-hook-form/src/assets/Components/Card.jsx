import React from 'react'

const Card = ({user,setToggle, id,deleteUser}) => {
  
  return (
<div className=" p-1 h-78 overflow-hidden w-60 bg-amber-300 border border-black rounded-xl flex flex-col gap-1">
      <div className=" h-40 overflow-hidden object-cover rounded-t-xl w-full bg-red-500">
          <img className="h-full w-full " src={user.Image} alt="not found"  />
      </div>
    <div className="flex flex-col gap-1">

        <div className=" flex  items-center gap-2 ">
        <label className= "font-bold text-xl" htmlFor="user-name">Name : </label>
        <h1 id="user-name" className ="text-s">{user.name}</h1>
        </div>

        <div className=" flex  items-center gap-2 " >
         <label  className= "font-bold " htmlFor="user-email">Email ID: </label>
        <p id="user-email" className ="text-s">{user.email}</p>
        </div>

        <div className=" flex  items-center gap-2 ">
         <label  className= "font-bold " htmlFor="user-contact">Contact No. : </label>
        <p id="user-contact" className ="text-s">{user.mobile}</p>
      </div>

    </div>
  <div className="w-full flex items-center gap-3 p-1 justify-center ">
    <button
    onClick={()=>{setToggle((prev)=>!prev)}}
    className="py-2 px-5 text-white rounded-2xl active:translate-y-[-2px] bg-blue-500"
    >Update</button>

    <button 
    onClick={()=>{
       return deleteUser(id);
    }}
    className="py-2 px-5 text-white rounded-2xl active:translate-y-[-2px] bg-red-500"
    >Delete</button>
  </div>
</div>
  )
  
}

export default Card
