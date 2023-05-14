package com.fakhir.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class DateTimeService {

    @Autowired
    private DateTimeRepository dateTimeRepository;

    public List<Date> getAllDateTime() {
        List<Entity> entities = dateTimeRepository.findAll();

        List<Date> dates = new ArrayList<>();

        for (Entity entity : entities) {
            dates.add(entity.date);
        }

        return dates;
    }

}
