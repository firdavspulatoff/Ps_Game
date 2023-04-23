const router = require("express").Router();
const controller = require("../controllers/userController");

router.route("/signin").post(controller.signin);
router.route("/signup").post(controller.signup);
router.route("/self").get(controller.protect, controller.userSelf);
module.exports = router;
