import React,{useRef} from 'react'

/*import { auth} from '../firebase';*/

import './SignupScreen.css';
import { app } from '../firebase-config';
import { 
  getAuth,
  onAuthStateChanged, 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator
} from 'firebase/auth';


function SignupScreen() {
    const authentication = getAuth();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(
            authentication,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message);
        });
    };
    const signIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(
            authentication,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        }) .catch((error)=>{
            alert(error.message);
        });
        
    };
    return (
        <div className="signupScreen">
            <form action="">
                <h1>Sign In</h1>
                <input  ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} placeholder='Password' type="password" />
                <button type="submit" onClick={signIn} >Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to brand?</span> 
                     <span className="signupScreen__link" onClick={register}> Sign Up now.</span> 
                     </h4>
            </form>
        </div>
    )
}

export default SignupScreen
