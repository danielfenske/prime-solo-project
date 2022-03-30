import './TopNav.scss';
import Logo from './quicklift-logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function TopNav() {

    const handleOpen = () => {
        console.log('in handleOpen');
    }

    return (
        <div className="topNav">
            <img src={Logo} className="navLogo"/>
            <MenuIcon onClick={handleOpen} className="navMenu"/>
        </div>
    )
}

export default TopNav;