package com.rubensathe.em_project;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


public class EmEntity {
    
   
    private Long id;

    private String name;
    private String email;
    private Long phone;
}
