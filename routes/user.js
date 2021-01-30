const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const userController = require("../controllers/userController");


// login is a async function 
//it checks for validity of the req parameters
// catchErrors is a normal middleware function has req, res
router.post("/login", catchErrors(userController.login));

// register is a async function 
//it checks for validity of the req parameters
router.post("/register", catchErrors(userController.register));


module.exports = router;