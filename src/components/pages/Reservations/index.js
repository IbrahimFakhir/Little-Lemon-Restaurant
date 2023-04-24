import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import { fetchAPI, submitAPI } from "../../../utils/fakeAPI";
import pages from '../../../utils/pages';
import BookingForm from './ReservationForm'

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

export default function Reservation() {
    return (
        <>
            
        </>
    )
}