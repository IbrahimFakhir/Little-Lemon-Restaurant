import { useState } from "react";
import FormField from "./FormField";
import api from "./../../../utils/axiosConfig";
import "./index.css";
import ReservationDetails from "./ReservationDetails";

export default function PreviousReservations () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [reservations, setReservations] = useState([]);
    
    const handleFormSubmit = e => {
        e.preventDefault();
        
        api.get(`/api/v1/booked-reservations/${firstName + " " + lastName}`)
        .then((response) => setReservations(response.data))
    }

    const invalidFirstNameErrorMessage = 'Please enter your first name';
    const invalidLastNameErrorMessage = 'Please enter your last name';

    const isFirstNameValid = () => firstName !== '';
    const isLastNameValid = () => lastName !== '';
    const areAllFieldsValid = () => isFirstNameValid && isLastNameValid;

    return (
        <div className='reservations'>
            <h2>Previous Reservations</h2>
            <div className='container previous-reservations'>
                <form onSubmit={handleFormSubmit}>
                    <FormField
                        label="First Name"
                        htmlFor="first-name"
                        hasError={!isFirstNameValid}
                        errorMessage={invalidFirstNameErrorMessage}
                    >
                        <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            value={firstName}
                            required={true}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </FormField>
                    <FormField
                        label="Last Name"
                        htmlFor="last-name"
                        hasError={!isLastNameValid}
                        errorMessage={invalidLastNameErrorMessage}
                    >
                        <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            value={lastName}
                            required={true}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </FormField>
                    <button
                        className='button-primary'
                        type="submit"
                        disabled={!areAllFieldsValid}
                    >
                        View Reservations
                    </button>
                </form>
                { reservations.length !== 0 && 
                    <div className="prev-reservations">
                        {reservations.map((reservation, index) =>
                            <ReservationDetails 
                            key={index}
                            reservation={reservation}
                            index={index}
                            />
                        )}
                    </div>
                }
            </div>
        </div>
    )
}