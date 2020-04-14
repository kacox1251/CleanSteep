import axios from "axios";
export default {
    getMountainRoutes: (city, state) => {
       return axios.get(`/api/locations?city=${city}&state=${state}`)
    },
    // register a user
  register: function(userInput) {
    console.log("userInput", userInput);
    return axios.post("/api/user", {
      username: userInput.email,
      password: userInput.password
    });
  },
  // login a user
  login: function(userInput) {
    return axios.post("/api/user/login", {
      username: userInput.email,
      password: userInput.password
    });
  },
  // logout a user
  logout: function() {
    return axios.post("/api/user/logout");
  },
  // see if user is logged in
  status: function() {
    return axios.get('/api/user')
  }
}