import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ConfirmedReservation() {
    return(
        <div className='container confirmed-reservation'>
            <FontAwesomeIcon icon={faCircleCheck} size="3x" />
            <h2>Your reservation has been confirmed.</h2>
            <p>You will receive an email with all the details</p>
        </div>
    )
}