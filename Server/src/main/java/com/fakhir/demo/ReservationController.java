package com.fakhir.demo;

import org.hibernate.annotations.Parameter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @RequestMapping(
            value = "/api/v1/availableTimes/{date}",
            method = RequestMethod.GET,
            produces = {"application/json"}
    )
    public ResponseEntity<Map<String, Integer>> getAvailableDateTimes(@PathVariable("date") String date) {
        return new ResponseEntity<>(reservationService.getAllDateTime(date), HttpStatus.OK);
    }

}
