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

    public TreeMap<String, Integer> getAllDateTime(String date) {

        List<ReservationEntity> entities = dateTimeRepository.findByDateContaining(date);

        TreeMap<String, Integer> dates = new TreeMap<String, Integer>();

        final Integer MAX_NUM_GUESTS = 15;

        dates.put("17:00", MAX_NUM_GUESTS);
        dates.put("17:30", MAX_NUM_GUESTS);
        dates.put("18:00", MAX_NUM_GUESTS);
        dates.put("18:30", MAX_NUM_GUESTS);
        dates.put("19:00", MAX_NUM_GUESTS);
        dates.put("19:30", MAX_NUM_GUESTS);
        dates.put("20:00", MAX_NUM_GUESTS);
        dates.put("20:30", MAX_NUM_GUESTS);
        dates.put("21:00", MAX_NUM_GUESTS);
        dates.put("21:30", MAX_NUM_GUESTS);
        dates.put("22:00", MAX_NUM_GUESTS);
        dates.put("22:30", MAX_NUM_GUESTS);
        dates.put("23:00", MAX_NUM_GUESTS);
        dates.put("23:30", MAX_NUM_GUESTS);

        for (ReservationEntity entitiy : entities) {

            // 2022-03-06 22:00:00
            dates.put(entitiy.date.substring(11), dates.get(entitiy.date.substring(11)) - entitiy.numGuests);

        }

        dates.values().removeIf(f -> f == 0f);

        return dates;

    }

}
