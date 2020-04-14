import axios from "axios";
export default {
    getMountainRoutes: (city, state) => {
       return axios.get(`/api/locations?city=${city}&state=${state}`)
    },

    saveRoute: function(routeData) {
        return axios.post("/api/routes", routeData);
    },

    getRoute: function() {
        return axios.get("/api/routes");
    },

      // Deletes the book with the given id
    deleteRoute: function(id) {
        return axios.delete("/api/routes/" + id);
    },

    changeRating: function(id) {
        return axios.put("/api/routes/" + id);
    },
}