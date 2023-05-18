import { useState } from "react";
import FormField from "./FormField";

const ReservationSubmit = (handleFormSubmit) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const invalidFirstNameErrorMessage = 'Please enter your first name';
    const invalidLastNameErrorMessage = 'Please enter your last name';
    const invalidEmailErrorMessage = 'Please enter your email name';
    const invalidPhoneErrorMessage = 'Pleaser enter your phone number';

    const isFirstNameValid = () => firstName !== '';
    const isLastNameValid = () => lastName !== '';
    const isEmailValid = () => email !== '';
    const isPhoneValid = () => phone !== '';
    const areAllFieldsValid = () =>
        isFirstNameValid()
        && isLastNameValid()
        && isEmailValid()
        && isPhoneValid();

    return (
        <div className="reservations">
            <h2>Table Bookings</h2>
            <form onSubmit={handleFormSubmit}>
                <FormField
                    label="First Name"
                    htmlFor="first-name"
                    hasError={!isFirstNameValid}
                    errorMessage={invalidFirstNameErrorMessage}
                >
                    <input
                        
                    />
                </FormField>
            </form>
        </div>
    )
}

export default ReservationSubmit;
