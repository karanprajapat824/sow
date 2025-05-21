import './../Css/Sidebar.css';
import { 
    FcDocument,
    FcConferenceCall,
    FcDebt,
    FcFinePrint,
    FcNews,
    FcVoicePresentation,
    FcImport
} from "react-icons/fc";
import { IoPricetags } from "react-icons/io5";
import { MdOutlineUnpublished } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import ProfileIcon from './ProfileIcon';
const Sidebar = ()=>{
    return(
        <div>
            <div className='mobile-only sidebar-profileicon'>
                <ProfileIcon />
            </div>
            <div className='menu'>Menu</div>
            <div className='horizontal-line'></div>
            <div className='sidebar-content'>
                <div><FcDocument className='sidebar-icons'/>Invoices</div>
                <div><FcConferenceCall className='sidebar-icons'/>Customers</div>
                <div><FcDebt className='sidebar-icons'/>My Business</div>
                <div><FcNews className='sidebar-icons'/>Invoice Journal</div>
                <div><IoPricetags className='sidebar-icons' style={{color : "orange"}}/>Price List</div>
                <div><FcFinePrint className='sidebar-icons'/>Multiple Invoices</div>
                <div><MdOutlineUnpublished className='sidebar-icons' style={{color : "red"}}/>Unpaid Invoices</div>
                <div><BiSolidOffer className='sidebar-icons' style={{color : "#4caf50"}}/>Offer</div>
                <div style={{color : "grey"}}><AiOutlineControl className='sidebar-icons'/>Inventry Control</div>
                <div style={{color : "grey"}}><FcVoicePresentation className='sidebar-icons'/>Member Invoicing</div>
                <div><FcImport className='sidebar-icons'/>Import/Export</div>
                <div><CiLogout className='sidebar-icons'/>Log out</div>
            </div>
        </div>
    )
}

export default Sidebar;