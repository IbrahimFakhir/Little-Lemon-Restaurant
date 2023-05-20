import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from './FormField';
import pages from '../../../utils/pages';

const ReservationForm = ({availableTimes, dispatchOnDateChange}) => {
    const navigate = useNavigate();
    
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

    const handleTimeChange = e => setTime(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        const info = {
            date: date,
            time: time,
            numGuests: numGuests,
            occasion: occasion
        }
        navigate(pages.get('reservationSubmit').path, {state: info});
    };

    const previousReservations = () => {
        navigate(pages.get('previousReservations').path);
    }

    return (
        <form onSubmit={handleFormSubmit}>
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
            <FormField
                label="Time" 
                htmlFor="booking-time" 
                hasError={!isTimeValid()} 
                errorMessage={invalidTimeErrorMessage}
            >
                <select
                    id="booking-time" 
                    name="booking-time" 
                    value={time} 
                    required={true} 
                    onChange={handleTimeChange}
                >
                    {availableTimes.map(times => 
                    <option data-testid="booking-time-option" key={times}>
                    {times}
                    </option>)}
                </select>
            </FormField>
            <FormField
                label="Number of guests"
                htmlFor="booking-number-guests"
                hasError={!isNumGuestsValid()}
                errorMessage={invalidNumberOfGuestsErrorMessage}
            >
                <input 
                    type="number" 
                    id="booking-number-guests" 
                    name="booking-number-guests" 
                    value={numGuests} 
                    min={minGuests} 
                    max={maxGuests} 
                    required={true} 
                    onChange={e => setNumGuests(e.target.value)}
                />
            </FormField>
            <FormField
                label="Occasion" 
                htmlFor="booking-occasion" 
                hasError={!isOccasionValid()} 
                errorMessage={invalidOccasionErrorMessage}
            >
                <select 
                    id="booking-occasion" 
                    name="booking-occasion" 
                    value={occasion} 
                    required={true} 
                    onChange={e => setOccasion(e.target.value)}
                >
                    {occasions.map(occasion => 
                        <option data-testid="booking-occasion-option" key={occasion}>
                        {occasion}
                        </option>)}
                </select>
            </FormField>
            <button
                className='button-primary'
                type="submit"
                disabled={!areAllFieldsValid}
            >
                Continue
            </button>
            <button 
                className='button-secondary'
                type='button'
                onClick={previousReservations}
            >
                View Previous Reservations
            </button>
        </form>
    )

}

export default ReservationForm;
