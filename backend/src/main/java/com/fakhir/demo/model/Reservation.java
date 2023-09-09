package com.fakhir.demo.model;

import lombok.Data;

@Data
public class Reservation {
    String date;
    Integer numGuests;
    Occasion occasion;
    String name;
    String email;
    String telephone;
}


