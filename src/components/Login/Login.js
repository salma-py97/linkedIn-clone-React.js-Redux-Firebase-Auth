import './Login.css'

import {auth} from '../../firebase'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../../features/userSlice'

const Login = () => {
  // state
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const [password, setPassword] = useState("")

  // init dispatch
  const dispatch = useDispatch()

  // functions
  const register = () => {
    if(!name){
      alert('Please enter a name!')
    }
    // email & password & profilePic & name from form in Login.js (use useState, value={} and onChange={})
    auth.createUserWithEmailAndPassword(email, password)
      // after creating user, access user and update profile with the other information (name, profilePic)
      .then(userAuth => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic
        })
        // push user to redux store so they can access app
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoURL: profilePic
          }))
        })
      }).catch(error => alert(error.message))
  }


  // Login
  const loginToApp = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(login(
          {
            email: userAuth.user.email,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
            uid: userAuth.user.uid
          }
        ))
      }).catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png" alt="" />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />

        <button type="submit" onClick={loginToApp} >Log In</button>
      </form>

      <p>Not a member? <span className="login__register" onClick={register} >Register Now</span></p>

    </div>
  )
}

export default Login
