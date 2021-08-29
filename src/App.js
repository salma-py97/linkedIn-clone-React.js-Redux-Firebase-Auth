import './App.css';

import Header from './components/Header/Header'
import Feed from './components/Feed/Feed'
import Sidebar from './components/Sidebar/Sidebar'
import Widgets from './components/Widgets/Widgets'
import Login from './components/Login/Login'


// REDUX
import {useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'

// Persistin login
import {useEffect} from 'react';
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import {login, logout} from './features/userSlice'

const App = () => {
  // selectUser = state => state.user.user
  const user = useSelector(selectUser)

  // init dispatch
  const dispatch = useDispatch()

  // persisting login
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        // dispatch user to store
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user 
      ? <Login />
      : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
