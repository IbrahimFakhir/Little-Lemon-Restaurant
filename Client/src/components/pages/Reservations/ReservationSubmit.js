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
                <FormField
                    label="Email"
                    htmlFor="email"
                    hasError={!isEmailValid}
                    errorMessage={invalidEmailErrorMessage}
                >
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        required={true}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormField>
                <FormField
                    label="Telephone Number"
                    htmlFor="phone"
                    hasError={!isPhoneValid}
                    errorMessage={invalidPhoneErrorMessage}
                >
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        required={true}
                        onChange={e => setPhone(e.target.value)}
                    />
                </FormField>
            </form>
        </div>
    )
}

export default ReservationSubmit;
