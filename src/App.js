import React from "react";
import "./App.css";
import FacebookLogin from "./components/facebook-login/facebook-login";
import GoogleLogin from "./components/google-login/google-login";
function App() {
  return (
    <div className="App">
      <FacebookLogin />
      <GoogleLogin />
    </div>
  );
}

export default App;
