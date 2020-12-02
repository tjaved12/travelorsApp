// This code is meant to serve as a mock fetch from an API.


import axios from "axios";

export default {
  // Gets all countries
  postlogin: function(userObject) {
    return axios.post("/api/LoginInfo", userObject);
  },
  postSignup: function(userObject) {
    return axios.post("/api/Signup", userObject);
  },
  getSelection: function() {
    return axios.get("/api/Selection");
  },
  
};