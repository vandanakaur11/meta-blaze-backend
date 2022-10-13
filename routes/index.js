const router = require("express").Router();
const { createSubscription } = require("./../controllers");

router.route("/").post(createSubscription);

module.exports = router;
