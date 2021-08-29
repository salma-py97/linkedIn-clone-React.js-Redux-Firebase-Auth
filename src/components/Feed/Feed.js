import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import Post from './Post';
import {useState, useEffect} from 'react'

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import {db} from '../../firebase'
// to use timestamp import firebase
import firebase from 'firebase'

// pull from store
import {selectUser} from '../../features/userSlice'
import {useSelector} from 'react-redux'

// react-flip-move
import FlipMove from 'react-flip-move'


const Feed = () => {
  // State
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState("")
  
  // init user
  const user = useSelector(selectUser)
  // deconstruct user
  const {displayName, email, photoURL} = user

  // Function
  const sendPost = (e) => {
    e.preventDefault()

    // Add post to firebase
    db.collection('posts').add({
      name: displayName,
      message: input,
      description: email,
      photoURL: photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // clear Form
    setInput("")
  }

  // useEffect to get all posts in firestore
  useEffect(() => {
    db.collection('posts')
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc  => ({id: doc.id, data: doc.data()})))
    ))

  }, [])


  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form 
          onSubmit={sendPost}
          >
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button>Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={PhotoCameraIcon} text="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} text="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} text="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} text="Write article" color="#7FC15E" />
        </div>
      </div>



      {/* Posts */}
      <FlipMove>
        {posts?.map(({id, data : {name, message, description, photoURL, timestamp}}) => (
          <Post key={id} name={name} message={message} description={description} photoURL={photoURL} timestamp={timestamp}  />
        ))}
      </FlipMove>




    </div>
  )
}

export default Feed
