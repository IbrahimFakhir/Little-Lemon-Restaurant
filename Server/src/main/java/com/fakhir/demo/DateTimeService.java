package com.fakhir.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DateTimeService {

    @Autowired
    private DateTimeRepository dateTimeRepository;

    public Entity getAvailableDateTimes() {
        return dateTimeRepository.getAllByAvailable(true);
    }
}
