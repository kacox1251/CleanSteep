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
      lat: {type: Number},
      long: {type: Number}
    },

    routeDifficulty: {
      type: Number
    },

    routeRating: {
      completed: {
        type: Boolean,
        required: false
      },
      comments: {
        type: String,
        required: false
      },
      rating: {
        type: Number,
        required: false
      }
    },
  });

  const Route = mongoose.model("Route", RouteSchema);

  module.exports = Route;
