
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Chat } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/user/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
export default function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    function logoutOfApp(e) {
        dispatch(logout());
        return signOut(auth);
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
                <div className='header__search'>
                    {/* search box */}
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="header__right">

                <HeaderOption
                    Icon={HomeIcon}
                    title="Home"
                />
                <HeaderOption
                    Icon={SupervisorAccountIcon}
                    title="My Network"
                />
                <HeaderOption
                    Icon={BusinessCenterIcon}
                    title="Jobs"
                />
                <HeaderOption
                    Icon={ChatIcon}
                    title="Messaging"
                />
                <HeaderOption
                    Icon={NotificationsIcon}
                    title="Notifications"
                />


                <HeaderOption
                    avatar="{user.photoURL}"
                    title={user.displayName}
                    onClick={logoutOfApp}
                    name = {user.displayName}
                />
            </div>
        </div>
    )
}