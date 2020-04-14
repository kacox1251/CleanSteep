const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    routeID: {
      type: Number
    },
  
    routeName: {
      type: String
    },

    routeLocation: {
      lat: {type: Number},
      long: {type: Number}
    },

    routeDifficulty: {
      type: String
    },

    routeRating: {
      completed: {
        type: Boolean,
        default: false,
        required: false
      },
      comments: {
        type: String,
        default: "",
        required: false
      },
      rating: {
        type: Number,
        default: 0,
        required: false
      }
    },
  });

  const Route = mongoose.model("Route", RouteSchema);

  module.exports = Route;
