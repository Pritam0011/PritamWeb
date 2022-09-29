const express = require("express");
const axios = require("axios");
const path=require('path')
/* Creating a router object. */
const Rou = express.Router();

/* This is a route that is used to get the news based on the country. */
Rou.get("/", async (req, res) => {
		res.render("head");
});

Rou.get("/notes", async (req, res) => {
	let filePath=path.join(__dirname,'../apps/Notes/notes.html')
	res.sendFile(filePath);
});

Rou.get("/qrgen", async (req, res) => {
	let filePath=path.join(__dirname,'../apps/genqr/qr.html')
	res.sendFile(filePath);
});

// Rou.get("/pwchat", async (req, res) => {
// 	res.links('https://live-pwchat.herokuapp.com/');
// 	res.links(links)
// });

module.exports = Rou;
