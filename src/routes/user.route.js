const express = require("express");
const router = express.Router();

router.get("/user-get", (req, res) => {
  res.json({
    message: "GET request received",
  });
});
router.get("/user-gets", (req, res) => {
  res.json({
    message: "GET request received 2",
  });
});

module.exports = router;