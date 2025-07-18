package com.rubensathe.em_project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;




@RestController
@CrossOrigin("http://localhost:3000/")
public class EmController {
    
   // List<Employee> employees = new ArrayList<>();

  @Autowired
   private EmService employeeService;

  // EmService employeeService = new EmployeeServiceImpl();

    @GetMapping("/showemp")
    public List<Employee> getAllEmployees() {
        return employeeService.readEmployee();
    }

    @GetMapping("/findemp/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeService.findEmployee(id);
    }

    @PostMapping("/saveemp")
    public Employee createEmp(@RequestBody Employee employee) {
       // employees.add(employee);
       Employee e = null;
       e =employeeService.createEmployee(employee);
        return e;
         
    }

    @DeleteMapping("/delemp/{id}")
    public String deleteEmployee(@PathVariable Long id)
    {
        if(employeeService.deleteEmployee(id))
            return "Delete Successfully";
        return "Not found";    

    }

    @PutMapping("/updateemp/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        
        return employeeService.updateEmployee(id, employee);
    }



     
    
    
}
