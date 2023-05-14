package com.fakhir.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/date-time")
public class DateTimeController {

    @Autowired
    private DateTimeService dateTimeService;

    @GetMapping
    public ResponseEntity<Entity> getAvailableDateTimes() {
        return new ResponseEntity<Entity>(dateTimeService.getAvailableDateTimes(), HttpStatus.OK);
    }

}
