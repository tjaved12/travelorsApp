// This code is meant to serve as a mock fetch from an API.


import axios from "axios";

export default {
  // Gets all countries
  getlogin: function() {
    return axios.get("/api/LoginInfo");
  },
  getSelection: function() {
    return axios.get("/api/Selection");
  },
  
};
