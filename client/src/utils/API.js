import axios from "axios";
export default {
    getMountainRoutes: (city, state) => {
       return axios.get(`/api/data/locations?city=${city}&state=${state}`)
    },

    saveRoute: function(routeData) {
        return axios.post("/api/data/routes", routeData);
    },

    getRoute: function() {
        return axios.get("/api/data/routes");
    },

      // Deletes the book with the given id
    deleteRoute: function(id) {
        return axios.delete("/api/data/routes/" + id);
    },

    changeRating: function(id) {
        return axios.put("/api/data/routes/" + id);
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