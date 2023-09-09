package com.fakhir.demo;

import com.fakhir.demo.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getReservationsByName(String name) {
        List<ReservationEntity> entities = reservationRepository.findByName(name);

        List<Reservation> reservations = new ArrayList<>();

        for (ReservationEntity entity : entities) {
            Reservation reservation = new Reservation();

            reservation.setDate(entity.date);
            reservation.setNumGuests(entity.numGuests);
            reservation.setOccasion(entity.occasion);
            reservation.setName(entity.name);
            reservation.setEmail(entity.email);
            reservation.setTelephone(entity.telephone);

            reservations.add(reservation);
        }

        return reservations;
    }

    public ResponseEntity<Void> makeReservation(Reservation reservation) {
        ReservationEntity reservationEntity = new ReservationEntity();

        reservationEntity.date = reservation.getDate();
        reservationEntity.numGuests = reservation.getNumGuests();
        reservationEntity.occasion = reservation.getOccasion();
        reservationEntity.name = reservation.getName();
        reservationEntity.email = reservation.getEmail();
        reservationEntity.telephone = reservation.getTelephone();

        reservationRepository.save(reservationEntity);

        return new ResponseEntity<Void>(HttpStatus.CREATED);
    }
}
