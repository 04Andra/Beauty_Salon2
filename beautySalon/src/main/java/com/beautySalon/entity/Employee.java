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

    private String firstName;   // name of the employee
    private String lastName;    // name of the service
    private String email;
    private String telNo;
    private String picURL;      // name of the field
    private String massage;     // price of the service
    private Double wallet;

    @ManyToMany
    private List<Stock> myStock;
    @ManyToMany
    private List<Appointment> appointmentList;
}
