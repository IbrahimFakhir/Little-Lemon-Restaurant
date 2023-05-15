package com.fakhir.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository dateTimeRepository;

    public HashMap<String, Integer> getAllDateTime(String date) {

        List<ReservationEntity> entities = dateTimeRepository.findByDateContaining(date);

        HashMap<String, Integer> dates = new HashMap<>();

        System.out.println(entities.get(0).date);

        return dates;

    }

}
