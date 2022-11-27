import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from './Sidebar';
import Feed from "./Feed"
import Widget from "./Widget"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/user/userSlice';
import Login from "./Login"
import { auth } from "./firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { login } from "./features/user/userSlice"
function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          //user logged in
          dispatch(
            login(
              {
                email: user.email,
                displayName: user.displayName,
                uid: user.uid,
                photoURL: user.photoURL,
              }
            ));
          console.log(user)
        } else {
          //user logged out
          // dispatch(
          //   logout()
          // );
          console.log('logout')
        }
      })
  }, []);

  const user = useSelector(selectUser);
  return (

    <div className="App">
      {/* {header} */}
      

      {!user ?
        (
          <Login />
        )
        : (
          <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
          </>
        )}
    </div >
  );
}

export default App;
