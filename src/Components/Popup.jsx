import './../Css/Popup.css';
import { MdErrorOutline } from "react-icons/md";
import { FcOk } from "react-icons/fc";
const Popup = (done=false)=>{
    return(
        <div className="popup">
            {
                done ? <div className='pass'><FcOk />Update success</div> : 
                <div className='fail'><MdErrorOutline />Failed to update</div>
            }
        </div>
    )
}

export default Popup;