import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css"

export default function ConfirmedReservation() {
    return(
        <div>
            <div className='reservations'>
                <h2>Your reservation has been confirmed.</h2>
            </div>
            <div className='container confirmed-reservation'>

                <FontAwesomeIcon icon={faCircleCheck} size="3x" />
                <p>You will receive an email with all the details</p>
            </div>
        </div>
    )
}