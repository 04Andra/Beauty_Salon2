package com.beautySalon.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    private String employeeName;   // name of the employee (firstName)
    private String serviceName;    // name of the service (lastName)
    private String email;
    private String telNo;
    private String fieldName;      // name of the field (picURL)
    private String servicePrice;     // price of the service (massage)
    private Double wallet;

    @ManyToMany
    private List<Stock> myStock;
    @ManyToMany
    private List<Appointment> appointmentList;
}
