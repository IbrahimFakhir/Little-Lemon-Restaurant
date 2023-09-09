export default function ReservationDetails({ reservation, index }) {
    return (
        <div className="order">
            <h3>Order #{index + 1}</h3>
            <div className="order-details">
                <div className="personal-details">
                <h4 className="order-details-heading">Personal Details</h4>
                <div className="order-details-item">
                    <label>First Name:</label>
                    <span>{reservation.name.split(" ")[0]}</span>
                </div>
                <div className="order-details-item">
                    <label>Last Name:</label>
                    <span>{reservation.name.split(" ")[1]}</span>
                </div>
                <div className="order-details-item">
                    <label>E-mail:</label>
                    <span>{reservation.email}</span>
                </div>
                <div className="order-details-item">
                    <label>Telephone:</label>
                    <span>{reservation.telephone}</span>
                </div>
                </div>
                <div className="reservation-details">
                <h4 className="order-details-heading">Reservation Details</h4>
                <div className="order-details-item">
                    <label>Date:</label>
                    <span>{reservation.date.split(" ")[0]}</span>
                </div>
                <div className="order-details-item">
                    <label>Time:</label>
                    <span>{reservation.date.split(" ")[1]}</span>
                </div>
                <div className="order-details-item">
                    <label>Occasion:</label>
                    <span>{reservation.occasion}</span>
                </div>
                <div className="order-details-item">
                    <label>Number of Guests:</label>
                    <span>{reservation.numGuests}</span>
                </div>
                </div>
            </div>
        </div>
    )
}