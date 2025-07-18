package com.rubensathe.em_project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeeServiceImpl implements EmService{

    @Autowired
    private EmRepository employeeresository;
    
    @Override
    public Employee createEmployee(Employee employee) {

        Employee e = employeeresository.save(employee);
       // employees.add(employee);
        return e;

    }

    @Override
    public List<Employee> readEmployee() {
        List<Employee> employees = employeeresository.findAll();
         return employees;
    }

    @Override
    public Boolean deleteEmployee(Long id) {
        Employee e = employeeresository.findById(id).get();
        employeeresository.delete(e);
        return true;
    }

    @Override
    public String updateEmployee(Long id, Employee employee) {
        
        Employee existingEmployee = employeeresository.findById(id).get();
        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setNumber(employee.getNumber()); 
        employeeresository.save(existingEmployee);
        return "Updated successfully";
    }

    @Override
    public Employee findEmployee(Long id) {
        Employee e= employeeresository.findById(id).get();
        return e;
    }
    
}
