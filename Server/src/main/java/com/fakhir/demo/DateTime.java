package com.fakhir.demo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class DateTime {
    @Id
    @GeneratedValue
    Integer id;
    @Column
    Date date;
}
