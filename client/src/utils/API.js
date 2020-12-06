import axios from "axios";

export default {
  //user creates an account
  userSignup: function (userObj) {
    return axios({
      method: "POST",
      data: userObj,
      withCredentials: true,
      url: "/api/user/register",
    });
  },
//user logs in with an account
  userLogin: function (userObj) {
    return axios.post("/api/user/login", userObj);
  },
//user ends session
  userLogout: function (userObj) {
    console.log(userObj);
    return axios.post("/api/user/logout", userObj);
  },
//get all wines
  getWines: function () {
    return axios.get("/api/wine");
  },
//get wine by id
  getWine: function (id) {
    return axios.get("/api/wine/" + id);
  },
};