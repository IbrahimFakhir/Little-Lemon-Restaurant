import { useState } from 'react';
import FormField from './FormField';
import Reservation from '.';

const ReservationForm = ({availableTimes, dispatchOnDateChange, submitData}) => {
    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const minGuests = 1;
    const maxGuests = 10;
    const occasions = ['Birthday', 'Anniversary'];
    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = 'Please choose a valid time';
    const invalidOccasionErrorMessage = 'Please choose a valid occasion';
    const invalidNumberOfGuestsErrorMessage = `Please enter a number between ${minGuests} and ${maxGuests}`;

    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultTime);
    const [numGuests, setNumGuests] = useState(minGuests);
    const [occasion, setOccasion] = useState(occasions[0]);

    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isNumGuestsValid = () => numGuests !== '';
    const isOccasionValid = () => occasion !== '';
    const areAllFieldsValid = () => 
        isDateValid() 
        && isTimeValid() 
        && isNumGuestsValid() 
        && isOccasionValid();

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        submitData({ date, time, numGuests, occasion });
    };

    return (
        <form onSubmit={handleDateChange}>
            <FormField
                label="Date"
                htmlFor="booking-date"
                hasError={!isDateValid}
                errorMessage={invalidDateErrorMessage}
            >
                <input
                    type="date" 
                    id="booking-date" 
                    name="booking-date" 
                    min={minimumDate} 
                    value={date} 
                    required={true} 
                    onChange={handleDateChange}
                />
            </FormField>
        </form>
    )

}

export default ReservationForm;
