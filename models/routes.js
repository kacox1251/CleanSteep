const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    routeID: {
      type: Number
    },
  
    routeName: {
      type: String
    },

    routeType: {
      type: String
    },

    routeImage: {
      type: String
    },

    routePitch: {
      type: Number
    },

    routeLocation: {
      lat: {type: Number},
      long: {type: Number},
      location: {type: Array}
    },

    routeDifficulty: {
      type: String
    },

    completed: {
      type: Boolean,
      default: false,
      required: false
    },
    
    routeRating: {
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

    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  });

  const Route = mongoose.model("Route", RouteSchema);

  module.exports = Route;
