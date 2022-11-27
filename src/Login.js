import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import "./login.css";
import { login } from './features/user/userSlice'
function Login() {
    const [email, setEmail] = React.useState('');
    const [fullName, setFullName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [profilePic, setProfilePic] = React.useState('');
    const dispatch = useDispatch()
    function register(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCraetion => {
                console.log('here')
                updateProfile(userCraetion.user, {
                    displayName: fullName,
                    photoURL: profilePic,
                }).then((user) => {

                    dispatch(login({
                        email: auth.currentUser.email,
                        displayName: fullName,
                        uid: auth.currentUser.uid,
                        photoURL: profilePic,
                    }))
                })
            }).catch(
                error => alert(error)
            )
    }

    function loginToApp(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(userAuth => {
            dispatch(
                login(
                    {
                        email: userAuth.user.email,
                        displayName: userAuth.user.displayName,
                        uid: userAuth.user.uid,
                        photoURL: userAuth.user.photoURL,
                    }
                )
            )
        }).catch(error => alert(error))

    }
    return (
        <div className="login">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
            <div className='form' >
                <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" placeholder='Full name {required if registering}' />
                <input onChange={(e) => setProfilePic(e.target.value)} value={profilePic} type="text" placeholder='Profile Url (optional)' />
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
                <button onClick={loginToApp}>Sign in</button>
            </div>
            <p>Not a member?
                <span className="login__register" onClick={register}>Reginster now</span>
            </p>
        </div>
    )
}

export default Login