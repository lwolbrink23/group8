import Arrow from "../assets/icons/circlearrow.png"
import { useNavigate } from 'react-router-dom';
import "../Styles/backbutton.css"

/* 
Welcome to the Back Button component. Whenever you need a back button in cour code, just:

TYPE THIS:
import BackButton from "../Components/BackButton"; 

THEN THIS:
<BackButton /> *wherever you want it in your HTML*
*/

function BackButton() {

    let navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <div><img src={Arrow} alt="back arrow" onClick={handleBack} id="arrow" style={{ cursor: 'pointer' }}></img></div>
    );
}

export default BackButton