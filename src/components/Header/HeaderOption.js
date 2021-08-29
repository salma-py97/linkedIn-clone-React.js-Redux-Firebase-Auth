import { Avatar } from '@material-ui/core'
import './HeaderOption.css'



const HeaderOption = ({Icon, avatar, text}) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={avatar} className="headerOption__icon"  /> }
      <p className="headerOption__title" >
        {text}      
      </p>
    </div>
  )
}

export default HeaderOption

