import axios from "axios";
export default {
    getMountainRoutes: (city, state) => {
       return axios.get(`/api/locations?city=${city}&state=${state}`)
    }
}