import axios from 'axios'
const EMPLOYEE_S_API_POST_URL = "http://localhost:8080/saveemp"
const EMPLOYEE_S_API_GET_URL = "http://localhost:8080/showemp"
const EMPLOYEE_S_API_GETID_URL = "http://localhost:8080/findemp"
const EMPLOYEE_S_API_DELETE_URL = "http://localhost:8080/delemp"
const EMPLOYEE_S_API_UPDATE_URL = "http://localhost:8080/updateemp"

class EmployeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_S_API_POST_URL,employee)
    }

    getEmployees()
    {
        return axios.get(EMPLOYEE_S_API_GET_URL)
    }

    getEmployeeById(id)
    {
        return axios.get(EMPLOYEE_S_API_GETID_URL+"/"+id)
    }
    deleteEmployeeById(id)
    {
        return axios.delete(EMPLOYEE_S_API_DELETE_URL+"/"+id)
    }

    updateEmployee(employee,id)
    {
        return axios.put(EMPLOYEE_S_API_UPDATE_URL+"/"+id,employee)
    }
}
export default new EmployeeService(); 