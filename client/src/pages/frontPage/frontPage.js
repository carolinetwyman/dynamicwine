import React from "react";
import "./frontPage.css";
import Map from "../../components/map/map";
import Login from '../../components/login/Login';

//i need to keep handlechange and handlesubmit

function frontPage() {
  return (
    <div>
      <Login />
      <Map />
    </div>
  );
}

export default frontPage;