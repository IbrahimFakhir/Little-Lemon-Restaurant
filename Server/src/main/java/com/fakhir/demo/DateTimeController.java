package com.fakhir.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/date-time")
public class DateTimeController {

    @Autowired
    private DateTimeService dateTimeService;

    @GetMapping
    public ResponseEntity<List<Date>> getAvailableDateTimes() {
        return new ResponseEntity<List<Date>>(dateTimeService.getAllDateTime(), HttpStatus.OK);
    }

}
