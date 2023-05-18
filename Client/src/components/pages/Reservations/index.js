import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import { fetchAPI, submitAPI } from "../../../utils/fakeAPI";
import pages from '../../../utils/pages';
import ReservationForm from './ReservationForm';

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

export default function Reservation() {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitData = formData => {
        const response = submitAPI(formData);
        if (response) navigate(pages.get('confirmedReservation').path);
    }
    
    return (
        <div className="reservations">
            <h2>Table Bookings</h2>
            <ReservationForm 
                availableTimes={availableTimes}
                dispatchOnDateChange={dispatchOnDateChange}
                submitData={submitData}
            />
        </div>
    )
}