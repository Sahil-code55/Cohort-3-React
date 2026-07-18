import React from 'react'
import { useForm } from 'react-hook-form';

const Form = ({setUser,setToggle}) => {
  
    let {register,handleSubmit,reset,formState:{errors}}=useForm();
   

    let formSubmit =(data)=>{
      const newUser ={
        id : Date.now(),
        ...data,
      }
      setUser(prev=>[...prev  ,newUser])
    reset();
    setToggle((prev)=>!prev)
    }

  return (
    <div  className="h-[90%] mt-2 flex flex-col gap-3 items-center justify-center rounded-xl w-full">
      <h1 className="text-white text-2xl">-Create User-</h1>

      <form 
      onSubmit={handleSubmit(formSubmit)}
      className=" w-100 rounded-xl flex flex-col items-center gap-6 bg-black border-3 border-amber-100 py-5 px-3" >


    <input
    {...register("name")}
     className= "p-2  text-white border-1 border-amber-100 w-full outline-0 rounded-2xl " 
     type="text"
     placeholder=" Enter  name" 
     />
    <input
    {...register("email")}
     className= "p-2  text-white border-1 border-amber-100 w-full outline-0 rounded-2xl " 
     type="email"
      placeholder=" Enter Email" 
      />
    <input
    {...register("mobile")}
     className= "p-2  text-white border-1 border-amber-100 w-full outline-0 rounded-2xl " 
     type="number"
      placeholder=" Enter Mobile number"
       />
    <input
    {...register("Image")}
     className= "p-2 text-white  border-1 border-amber-100 w-full outline-0 rounded-2xl "
      type="url" 
      placeholder=" Enter Image Url"
       />
    <button 
    type="submit"
     className="bg-blue-500 rounded-4xl py-2 px-4 text-white"
     >Add User</button>
      </form>
    </div>
  )
}

export default Form
