var express = require("express");
var app = express();

var loginFilter = require('./filters/loginFilter');
loginFilter.loginFilter(app);

var userRouter = require('./routers/router');
userRouter.router(app);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);
