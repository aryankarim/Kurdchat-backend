const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("cors")());

//Bring in the routes
app.use("/user", require("./routes/user"));
app.use("/chatroom", require("./routes/chatroom"));

const errorHandlers = require('./handlers/errorHandlers'); // include err s
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);

if (process.env.ENV === "DEVELOPMENT") {
    app.use(errorHandlers.developmentErrors);
} else {
    app.use(errorHandlers.productionErrors);
}



module.exports = app;