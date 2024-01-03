import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import AuthDetails from './AuthDetails';

const Auth = () => {
  return (
    <>
    <AuthDetails/>
    <SignIn/>
    <SignUp/>
    </>
  )
}

export default Auth;