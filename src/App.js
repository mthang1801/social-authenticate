import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import { TiSocialFacebookCircular } from "react-icons/ti/index";
import axios from "axios";
function App() {
  const responseFacebook = (response) => {
    console.log(response);
    const { userID, accessToken } = response;
    console.log(userID, accessToken);
    axios({
      url: `https://graph.facebook.com/v7.0/${userID}/?fields=id,name,picture,email&access_token=${accessToken}`,
      method: "GET",
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <h1>Login Via Facebook</h1>
      <FacebookLogin
        appId="270673860694881"
        autoLoad={false}
        field="name,email,picture"
        callback={responseFacebook}
        icon={<TiSocialFacebookCircular />}
      />
    </div>
  );
}

export default App;
