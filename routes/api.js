const express = require("express");
const router = express.Router();
const ta = require("../bin/trust_auth");

router.use("/", (req, res, next) => {
    console.log(req.body);
    next();
});

router.get("/trusted_url", (req, res) => {
    let ta_option = {
        user_name : req.query.user_name
    };
    ta.getTrustedURL(ta_option)
    .then(value => {
        res.status(200).send(value);
    })
    .catch(reason => {
        console.error(reason);
        res.send("Something was wrong!");
    });
});

module.exports = router;