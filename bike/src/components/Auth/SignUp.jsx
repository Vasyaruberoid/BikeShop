import React, { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    const[error, setError] = useState('');
function register(e) {
e.preventDefault()
if (copyPassword !== password){
setError("Password didn't match");
return
}
createUserWithEmailAndPassword(auth, email, password)
.then((user) => {
  console.log(user);
  setError("");
  setEmail("");
  setPassword("");
  setCopyPassword("");
  })
  .catch((err) => console.log(err));
};

  return (
    <div>
        <form onSubmit={register}>
            <h3>Create on account</h3>
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
            <input 
            placeholder='Please enter your password again' 
            value={copyPassword}
             onChange={(e) => setCopyPassword(e.target.value)} 
             type='password'
             />
            <button>Create account</button>    
        </form>
        {error ? <p style={{color:'red'}}>{error}</p> : ''}
    </div>
  )
}

export default SignUp;