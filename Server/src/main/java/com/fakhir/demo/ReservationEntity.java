package com.fakhir.demo;

import com.fakhir.demo.model.Occasion;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class ReservationEntity {
    @Id
    @GeneratedValue
    Integer id;
    @Column
    String date;
    Integer numGuests;
    Occasion occasion;
    String name;
    String email;
    String telephone;
}
