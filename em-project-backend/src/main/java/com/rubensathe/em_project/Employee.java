package com.rubensathe.em_project;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Emp_db")
@Getter
@Setter
@ToString
public class Employee {

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long id;

@Column(nullable = false)
private String name;
@Column(nullable = false)
private String email;
@Column(nullable = false)
private long number;

    
}
