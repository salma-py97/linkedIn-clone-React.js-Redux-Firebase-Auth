import { Avatar } from '@material-ui/core'
import './HeaderOption.css'
// pull from store
import {selectUser} from '../../features/userSlice'
import {useSelector} from 'react-redux'



const HeaderOption = ({Icon, avatar, text, onClick}) => {

  // init user
  const user = useSelector(selectUser)


  return (
    <div onClick={onClick} className="headerOption">
      {Icon 
      ? <Icon className="headerOption__icon" />
      :
      <Avatar src={user?.photoURL} className="headerOption__icon">{user?.displayName[0]}</Avatar>
    }
      <p className="headerOption__title" >
        {text}      
      </p>
    </div>
  )
}

export default HeaderOption

