import React, { useEffect, useState } from 'react';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from '../../firebase';

const AuthDetails = () => {
const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) =>{
        if(user){
setAuthUser(user)
        }else{
setAuthUser(null)
        }
    });
    return () => {
        listen()
    }
  },[]);
  function userSignUp (){
    signOut(auth)
    .then(()=> console.log('Success'))
    .catch((e) => console.log(e))  
}

    return (
    <div>
        {authUser ? (
        <div>
        <p>{`Signed in as ${authUser.email}`}</p>
        <button onClick={userSignUp}>Sign Out</button>
        </div>) 
        : ( 
        <p>Sign Out</p>

        )}
    </div>
  )
}

export default AuthDetails;