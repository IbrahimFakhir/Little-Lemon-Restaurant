import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import api from '../../../utils/axiosConfig';

export default function UnderConstruction() {
    const testPost = async () => {
        
    }
    const testGet = async () => {
        try {
            const response = await api.get("/api/v1/availableTimes/2022-03-06")

            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className='container under-construction'>
            <FontAwesomeIcon icon={ faPersonDigging } size='3x' />
            <h2>Page under construction</h2>

            <button onClick={testPost}>Post</button>
            <button onClick={testGet}>Get</button>
            
        </div>
    )
}