package com.fakhir.demo;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;

@jakarta.persistence.Entity
public class Entity {
    @Id
    @GeneratedValue
    Integer id;
    @Column
    Date date;
    boolean available;
}
