import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

// Log out
import {useDispatch} from 'react-redux'
import {logout} from '../../features/userSlice'
import {auth} from '../../firebase'

// pull from store
import {selectUser} from '../../features/userSlice'
import {useSelector} from 'react-redux'

const Header = () => {
  // init dispatch
  const dispatch = useDispatch()
  
  // init user
  const user = useSelector(selectUser)

  const logOutOfApp = () => {
    dispatch(logout())

    auth.signOut()
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src="/linkedin.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>

      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} text="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} text="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} text="Jobs" />
        <HeaderOption Icon={ChatIcon} text="Messaging" />
        <HeaderOption Icon={NotificationsNoneIcon} text="Notifications" />
        <HeaderOption onClick={logOutOfApp} text={user ? 'me/Logout' : 'Login'} />
      </div>
      
    </div>
  )
}

export default Header
