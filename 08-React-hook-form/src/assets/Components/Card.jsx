import React from 'react'

const Card = ({user,setToggle, id,deleteUser,setUpdateUser}) => {
  
  return (
<div className=" p-2 overflow-hidden h-78 overflow-hidden w-62 bg-black border border-black rounded-xl flex flex-col gap-1">
      <div className=" h-40 overflow-hidden object-cover rounded-xl w-full bg-red-500">
          <img className="h-full w-full " src={user.Image} alt="not found"  />
      </div>
    <div className="flex flex-col gap-1">

        <div className=" flex  items-center gap-2 ">
        <label className= "font-bold text-s text-white" htmlFor="user-name">Name : </label>
        <h2 id="user-name" className ="text-s text-white">{user.name}</h2>
        </div>

        <div className=" flex  items-center gap-2 " >
         <label  className= "font-bold text-s text-white " htmlFor="user-email">Email-ID: </label>
        <p id="user-email" className ="text-s text-white">{user.email}</p>
        </div>

        <div className=" flex  items-center gap-2 ">
         <label  className= "font-bold text-s text-white" htmlFor="user-contact">Contact No. : </label>
        <p id="user-contact" className ="text-s text-white">{user.mobile}</p>
      </div>

    </div>
  <div className="w-full flex items-center gap-3 p-1 justify-center ">
    <button
    onClick={()=>{
      setUpdateUser(user)
      setToggle((prev)=>!prev)
      
    }}
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
