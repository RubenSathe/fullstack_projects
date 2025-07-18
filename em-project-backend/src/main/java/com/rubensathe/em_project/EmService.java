package com.rubensathe.em_project;

import java.util.List;


public interface EmService {
    Employee createEmployee(Employee employee);
    List <Employee> readEmployee();
    Boolean deleteEmployee(Long id);
    String updateEmployee(Long id, Employee employee);
    Employee findEmployee(Long id);
    
}
