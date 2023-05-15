package com.fakhir.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository dateTimeRepository;

    public Map<String, Integer> getAllDateTime() {
        List<ReservationEntity> entities = dateTimeRepository.findAll();

        Map<String, Integer> dates = new Map<String, Integer>();

        for (ReservationEntity entity : entities) {
            dates.add(entity.date);
        }

        return dates;
    }

}
