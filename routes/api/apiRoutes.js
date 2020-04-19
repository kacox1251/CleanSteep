const path = require("path");
const router = require("express").Router();
const db = require("../../models")
const axios = require("axios")

router.get('/routes',function(req, res) {
    // console.log("req.user", req.user)
  db.Routes.find({ user: req.user })
  .then(function(data) {
    //   console.log("data", data)
      res.json(data);
  })
  .catch(function(err) {
    //   console.log("error", err)
      throw err;
  })
});

router.post("/routes", function(req, res) {
    // console.log("req.user", req.user)
    db.Routes.create({...req.body, user: req.user })
    .then(function(data) {
        // console.log("data", data)
        res.json(data);
    })
    .catch(function(err) {
        throw err;
    })
})

router.put("/routes/:id", function(req, res) {
    // console.log({_id: req.params.id}, req.body)
    db.Routes.updateOne({_id: req.params.id}, req.body)
    .then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        throw err;
    })
})

router.delete("/routes/:id", function(req, res) {
    db.Routes.deleteOne({_id: req.params.id})
    .then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        throw err;
    })
})

router.get("/locations", function(req, res) {
    const { city, state } = req.query;
    const queryUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&inFormat=kvp&outFormat=json&location=${city}+${state}&thumbMaps=false`

    axios.get(queryUrl)
        .then(function(data) {
            const { lat, lng: lon } = data.data.results[0].locations[0].latLng;

            axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=${lon}&maxDistance=10&minDiff=5.6&maxDiff=5.10&key=${process.env.MP_API_KEY}`)
            .then(mtnData => {
                res.json(mtnData.data.routes)
            })
            .catch(function(err) {
                throw err;
            })
        })
        .catch(function(err) {
            throw err;
        })

})

module.exports = router;