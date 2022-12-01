const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);
const moment = require("moment");
app.locals.moment = moment;

app.set("view engine", "ejs");
app.set("views", [
	path.join(__dirname, "./views/html"),
	path.join(__dirname, "./apps/NewsBox/html"),
]);

const port = process.env.PORT || 4000;

http.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/apps"));
app.use(express.static(__dirname + "/apps/NewsBox/view"));
app.use(express.static(__dirname + "/public/util"));

app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/main"));
app.use("/newsbox", require("./routes/newsboxrou"));
