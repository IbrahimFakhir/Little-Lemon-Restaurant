import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import api from '../../../utils/axiosConfig';

export default function UnderConstruction() {
    
    /* const testPost = async () => {
        try {
            const response = await api.post(
                "/api/v1/reservation",
                {
                    "date": "2023-05-20 22:00",
                    "numGuests": 3,
                    "occasion": "1",
                    "name": "mofo",
                    "email": "mogo",
                    "telephone": "dasdsa"
                }
            )
        }
        catch (err) {
            console.log(err);
        }
    }
    const testGet = async () => {
        try {
            const response = await api.get("/api/v1/booked-reservations/mo fo")

            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    } */
    
    return (
        <div className='container under-construction'>
            <FontAwesomeIcon icon={ faPersonDigging } size='3x' />
            <h2>Page under construction</h2>
        </div>
    )
}