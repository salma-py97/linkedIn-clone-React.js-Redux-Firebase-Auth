import { Avatar } from "@material-ui/core"
import "./Sidebar.css"

// pulling from store
import {selectUser} from '../../features/userSlice'
import {useSelector} from 'react-redux'

const Sidebar = () => {

  const user = useSelector(selectUser)
  // deconstructing user
  const {displayName, description, email, photoURL} = user

  const topics = ["reactjs",
  "programming",
  "webdevelopment",
  "webdesign",
  "softwareengineer"]


	return (
		<div className="sidebar">
			<div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
        <Avatar  className="sidebar__avatar" src={photoURL}>{!photoURL && displayName[0]}</Avatar>
        <h2>{displayName}</h2>
        <h4>{email}</h4>
      </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">{Math.floor(Math.random() * (10000 - 200) ) + 200}</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on posts</p>
            <p className="sidebar__statNumber">{Math.floor(Math.random() * (10000 - 200) ) + 200}</p>
          </div>
        </div>
			<div className="sidebar__bottom">
        <p style={{marginBottom: "10px"}} >Recent</p>

        {topics?.map(topic => (
          <div className="sidebar__recentItem">
            <span className="sidebar__hash" >#</span>
            <p>{topic}</p>
          </div>
        ))}

      </div>

		</div>
	)
}

export default Sidebar
