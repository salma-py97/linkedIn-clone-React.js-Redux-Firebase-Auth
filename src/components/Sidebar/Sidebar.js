import { Avatar } from "@material-ui/core"
import "./Sidebar.css"

const Sidebar = () => {

  const topics = ["reactjs",
  "programming",
  "webdevelopment",
  "webdesign",
  "softwareengineer"]


	return (
		<div className="sidebar">
			<div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" alt="" />
        <Avatar  className="sidebar__avatar" />
        <h2>Salma EL BARMAKI</h2>
        <h4>Web developer by night, financial analyst by day</h4>
      </div>
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,534</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on posts</p>
            <p className="sidebar__statNumber">3,229</p>
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
