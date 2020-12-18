var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/api/test", function(req, res, next) {
  res.send({ proxy: "message from the server using proxy" });
});

module.exports = router;
