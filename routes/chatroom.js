const router = require("express").Router();//creating a miniapp
const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatroomController");

const auth = require("../middlewares/auth");//another middleware function

router.post("/", auth, catchErrors(chatroomController.createChatroom));

router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));



module.exports = router;