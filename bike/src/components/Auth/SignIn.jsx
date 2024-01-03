import React, { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const[error, setError] = useState('');
function LogIn(e) {
e.preventDefault()

signInWithEmailAndPassword(auth, email, password)
.then((user) => {
  console.log(user);
  setError("");
  setEmail("");
  setPassword("");
  })
  .catch((err) => {
  console.log(err);
  setError("Sorry, Couldn't find your Account");
});
}

  return (
    <div>
        <form>
            <h3>Log in</h3>
            <input
            placeholder='Please enter your email'
             value={email}
              onChange={(e) => setEmail(e.target.value)} 
              type='email'
              />
            <input
            placeholder='Please enter your password' 
            value={password}
             onChange={(e) => setPassword(e.target.value)} 
             type='password'
             />
            <button onClick={LogIn}>Login</button>    
        </form>
        {error ? <p style={{color:'red'}}>{error}</p> : ''}
    </div>
  )
}

export default SignIn;