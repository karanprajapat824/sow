import './../Css/Navbar.css';
import ProfileIcon from './ProfileIcon';
import { GiHamburgerMenu } from "react-icons/gi"; 
import { IoCloseSharp } from "react-icons/io5";
const Navbar = ({sidebar,setSidebar}) => {
    return (
        <div className='navbar'>
            <div className='profile desktop-only'>
                <div className='profile-icon'>
                    <ProfileIcon />
                </div>
                <div className='profile-info'>
                    <div>John Andre</div>
                    <div>Storfjord As</div>
                </div>
            </div>
            <div 
            onClick={()=>setSidebar(!sidebar)}
            className='hamburgermenu'>
                {
                    sidebar ? <IoCloseSharp /> : <GiHamburgerMenu />
                }
            </div>
            <div className='language'>
                English
                <img src='https://storage.123fakturere.no/public/flags/GB.png' alt='flag'></img>
            </div>
        </div>
    )
}

export default Navbar;