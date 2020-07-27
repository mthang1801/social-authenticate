import React from 'react'
import GoogleLogin from 'react-google-login';
import {TiSocialGooglePlusCircular} from "react-icons/ti/index"
const LoginGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response)
  }
  return (
    <div>
      <GoogleLogin
    clientId="660605287272-mb2ik0f03na0tmuuq9rg88ta5qgqm22h.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    icon={<TiSocialGooglePlusCircular/>}
  />,
    </div>
  )
}

export default LoginGoogle
