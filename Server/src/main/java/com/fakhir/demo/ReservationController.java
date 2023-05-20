package com.fakhir.demo;

import com.fakhir.demo.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @CrossOrigin
    @RequestMapping(
            value = "/api/v1/availableTimes/{name}",
            method = RequestMethod.GET,
            produces = {"application/json"}
    )
    public ResponseEntity<List<Reservation>> getReservationsByName(@PathVariable("name") String name) {
        return new ResponseEntity<>(reservationService.getReservationsByName(name), HttpStatus.OK);
    }

    @CrossOrigin
    @RequestMapping(
            value = "/api/v1/reservation",
            method = RequestMethod.POST,
            consumes = {"application/json"}
    )
    public ResponseEntity<Void> makeReservation(@RequestBody Reservation reservation) {
        return reservationService.makeReservation(reservation);
    }

}
