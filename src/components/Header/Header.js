import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="/linkedin.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>

      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} text="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} text="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} text="Jobs" />
        <HeaderOption Icon={ChatIcon} text="Messaging" />
        <HeaderOption Icon={NotificationsNoneIcon} text="Notifications" />
        <HeaderOption avatar="https://i.ibb.co/7S0Vqgz/Female-Developer.jpg" text="Name" />
      </div>
      
    </div>
  )
}

export default Header
