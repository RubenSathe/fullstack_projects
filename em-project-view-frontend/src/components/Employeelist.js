import React, { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';



const Employeelist = () => {
  const[loading,setloading]=useState(true); 
   const[employees,setEmployees]=useState(null);

  useEffect(()=>{
    const fetchData = async()=>{
      setloading(true);
      try{
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      }catch(error)
      {
        console.log(error);
      } 
      setloading(false)
    };
    fetchData();
  },[]);

  const deleteEmpployee=(e,id)=>{
    e.preventDefault();
         EmployeeService.deleteEmployeeById(id)
         .then(()=>{
          if(employees){
            setEmployees((prevEmployee)=>{
              return prevEmployee.filter((employee)=> employee.id!==id);
            })
          }
        })
  };

    const editEmpployee = (e,id)=>{
      e.preventDefault();
      navigate(`/editEmpployee/${id}`)
    };

    const navigate = useNavigate();
  return (
    <div className="container mx-auto my-8">
    <div>
      <button onClick={()=>navigate("/AddEmployee")}
       className="bg-slate-800 hover:bg-stone-500 hover:text-black my-2 font-semibold px-20 py-2"> 👤 Add Employee</button>
    </div>

    <div>
      <table className="shadow font-medium">
        <thead className="bg-slate-800">
          <th className="px-6 py-3 uppercase tracking-wide">Name</th>
          <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
          <th className="px-6 py-3 uppercase tracking-wide">Email</th>
          <th className="px-6 py-3 uppercase tracking-wide">Action</th>
        </thead>
        {!loading && (
        <tbody>
          {employees.map((employee)=>( 
          <tr className="text-black hover:bg-white hover:text-black">
          <td className="text-left px-6 py-4 whitespace-nowrap ">{employee.name}</td>
          <td className="text-left px-6 py-4 whitespace-nowrap">{employee.number}</td>
          <td className="text-left px-6 py-4 whitespace-nowrap">{employee.email}</td>
          <td className="text-left px-6 py-4 whitespace-nowrap">
            <a 
            onClick={(e,id)=> editEmpployee(e,employee.id )}
            className='hover:text-pink-800 hover:cursor-pointer'> 📝 Edit</a>
            <a  
            onClick={(e,id)=> deleteEmpployee(e,employee.id )}
            className="hover:text-red-500 hover:cursor-pointer"> 🚮 Delete</a>
          </td>
            </tr>
            ))}
        </tbody>
        )}
      </table>
    </div>
    </div>
  )
}

export default Employeelist