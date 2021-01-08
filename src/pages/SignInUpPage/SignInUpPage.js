import React from 'react'
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import './SignInUpPage.scss'

const SignInUpPage = () => {
  return (
    <div className="sign-in-up-page">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInUpPage