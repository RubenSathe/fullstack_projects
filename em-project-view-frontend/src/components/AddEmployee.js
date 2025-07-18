import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const AddEmployee = () => {

  const[employee,setEmployee]=useState({
    id:"",
    name:"",
    number:"",
    email:"",
  });

  const handlechange=(e)=>{
    const value = e.target.value;
    setEmployee({...employee,[e.target.name]:value})
  }

  const saveEmployee=(e)=>{
     e.preventDefault();
     EmployeeService.saveEmployee(employee)
     .then((response)=>{
      console.log(response)
      navigate("/")
    })
    .catch((error)=>{
      console.log(error);
    })

  }
  const reset= (e)=>{
    e.preventDefault();
    setEmployee({
      id:"",
     name:"",
     number:"",
     email:"",
    })
  }

  const navigate=useNavigate();
  return (

    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
        <div className="text-4xl tracking-wider font-bold text-center py-4 px-8">
        <p> 👤 Add Employee</p>
        </div>
        <div className="mx-10 my-2">

        <input  
        type='text'
        name="name"
        value={employee.name} 
        onChange={(e)=>handlechange(e)}
        className="w-full py-2 my-4 text-slate-800" placeholder="Name"></input>

        <input
        type='number'
        name="number"
        value={employee.number}
        onChange={(e)=>handlechange(e)}
        className="w-full py-2 my-4 text-slate-800" placeholder="Phone"></input>

        <input 
        type='email'
        name="email" 
        value={employee.email}
        onChange={(e)=>handlechange(e)}
        className="w-full py-2 my-4 text-slate-800" placeholder="Email"></input>

        </div>
        <div className="flex my-4 space-x=4 px-20">
        <button 
        onClick={saveEmployee}
        className="bg-stone-500 mx-2 py-2 px-6 hover:bg-stone-700 rounded">Save</button>
        <button onClick={reset}
        className="bg-stone-500 mx-2 py-2 px-6 hover:bg-stone-700 rounded">Clear</button>
        <button onClick={()=>navigate("/")}
        className="bg-stone-500 mx-2 py-2 px-6 hover:bg-stone-700 rounded">Cancel</button>
        </div>

    </div>
  )
}

export default AddEmployee