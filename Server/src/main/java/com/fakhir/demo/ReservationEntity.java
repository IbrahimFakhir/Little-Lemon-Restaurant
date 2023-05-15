package com.fakhir.demo;

import com.fakhir.demo.model.Occasion;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class ReservationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservation_sequence")
    @SequenceGenerator(name = "reservation_sequence", sequenceName= "reservationSequence", initialValue = 2, allocationSize = 1)
    Integer id;
    @Column
    String date;
    Integer numGuests;
    Occasion occasion;
    String name;
    String email;
    String telephone;
}
