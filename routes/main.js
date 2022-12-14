const express = require("express");
// const axios = require("axios");
const path = require("path");
/* Creating a router object. */
const Rou = express.Router();

/* This is a route that is used to get the news based on the country. */
Rou.get("/", async (req, res) => {
	res.render("head");
});

Rou.get("/notes", async (req, res) => {
	let filePath = path.join(__dirname, "../apps/Notes/notes.html");
	res.sendFile(filePath);
});

Rou.get("/qrgen", async (req, res) => {
	let filePath = path.join(__dirname, "../apps/QrGen/index.html");
	res.sendFile(filePath);
});

module.exports = Rou;
