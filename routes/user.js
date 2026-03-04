const express = require("express");
const router = express.Router();

module.exports = router;

router.get("/signup", (req, res) => {
    res.send("form");
});