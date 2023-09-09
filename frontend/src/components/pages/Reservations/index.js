import { useReducer } from "react";
import './index.css';
import { fetchAPI } from "../../../utils/fakeAPI";
import ReservationForm from './ReservationForm';

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];


export default function Reservation() {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    
    return (
        <div className="reservations">
            <h2>Table Bookings</h2>
            <ReservationForm 
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
            />
        </div>
    )
}