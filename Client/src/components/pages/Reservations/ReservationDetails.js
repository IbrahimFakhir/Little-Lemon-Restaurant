export default function ReservationDetails({ reservation, index }) {
    return (
        <div className="order">
            <h3>Your {index+1}. Order</h3>
            <div className="order-details">
                <div className="order-details-column">
                <p>
                    <strong>First Name:</strong> {reservation.name.split(" ")[0]}
                </p>
                <p>
                    <strong>Last Name:</strong> {reservation.name.split(" ")[1]}
                </p>
                <p>
                    <strong>E-mail:</strong> {reservation.email}
                </p>
                <p>
                    <strong>Telephone:</strong> {reservation.telephone}
                </p>
                </div>
                <div className="order-details-column">
                <p>
                    <strong>Date:</strong> {reservation.date.split(" ")[0]}
                </p>
                <p>
                    <strong>Time:</strong> {reservation.date.split(" ")[1]}
                </p>
                <p>
                    <strong>Occasion:</strong> {reservation.occasion}
                </p>
                <p>
                    <strong>Number of Guests:</strong> {reservation.numGuests}
                </p>
                </div>
            </div>
        </div>
    )
}