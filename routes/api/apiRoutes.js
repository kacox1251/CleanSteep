const path = require("path");
const router = require("express").Router();
const db = require("../../models")

router.get('/routes',function(req, res) {
  db.Routes.find({})
  .then(function(data) {
      res.json(data);
  })
  .catch(function(err) {
      throw err;
  })
});

router.post("/routes", function(req, res) {
    db.Routes.create(req.body)
    .then(function(data) {
        res.json(data);
    })
    .catch(function(err) {
        throw err;
    })
})

router.put("/routes/:id", function(req, res) {
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

module.exports = router;