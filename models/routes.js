const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    routeID: {
      type: String
    },
  
    routeName: {
      type: String
    },
  
    routeLocation: {
      type: Array
    },
  
    routeType: {
      type: String
    },

    routeDifficulty: {
      type: Number
    },

    routePitch: {
      type: Number
    },
    routeRating: {
      comments: {
        type: String
      },
      completed: {
        type: Boolean
      },
      rating: {
        type: Number
      }
    },
    routeImg: {
      type: String
    }
  });

  const Route = mongoose.model("Route", RouteSchema);

  module.exports = Route;
