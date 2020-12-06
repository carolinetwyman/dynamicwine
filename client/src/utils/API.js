import axios from "axios";

export default {
  //user creates an account 
  //need to add needing a password
  userSignup: function (userobject) {
    return axios({
      method: "POST",
      data: userobject,
      url: "/api/user/signup",
    });
  },
//user logs in with an account
  userLogin: function (userobject) {
    return axios.post("/api/user/login", userobject);
  },
//user ends session
  userLogout: function (userobject) {
    console.log(userobject);
    return axios.post("/api/user/logout", userobject);
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