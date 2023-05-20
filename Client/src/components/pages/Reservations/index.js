import { useReducer, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import api from "../../../utils/axiosConfig";
import { fetchAPI, submitAPI } from "../../../utils/fakeAPI";
import pages from '../../../utils/pages';
import ReservationForm from './ReservationForm';

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

const updateTimes2 = date => {
    api.get(`http://localhost:8080/api/v1/availableTimes/${date}`)
        .then((response) => console.log(response.data))
}

export default function Reservation() {
    const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const [times, setTimes] = useState({"": ""});

    useEffect(() => {
        const todaysDate = new Date().toISOString().split('T')[0];

        api.get(`http://localhost:8080/api/v1/availableTimes/${todaysDate}`)
        .then((response) => setTimes(response.data))

    }, [])

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