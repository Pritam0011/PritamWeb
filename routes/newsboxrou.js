const express = require("express");
const axios = require("axios");
require('dotenv').config();

/* Creating a router object. */
const newsRou = express.Router();

/* This is a route that is used to get the news based on the country. */
newsRou.get("/", async (req, res) => {
	try {
		const apiks=process.env.APIS.split(',');
		const apik = apiks[Math.floor(Math.random()*apiks.length)];
		var url =
			"http://newsapi.org/v2/top-headlines?" +
			"country=in&" +
			`apiKey=${apik}`;

		const news_get = await axios.get(url);
		res.render("news", { articles: news_get.data.articles, cate: "General" });
	} catch (error) {
		if (error.response) {
			console.log(error);
		}
	}
});

/* This is a route that is used to get the news based on the search. */
newsRou.post("/search", async (req, res) => {
	const search = req.body.search;
	try {
		const apiks=["286e21d0f5d04097b85a8e096078828b","6774a7a88fc0411c996360a4d2bea4a8"]
		const apik = apiks[Math.floor(Math.random()*apiks.length)];
		var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=${apik}`;

		const cat=search
		const news_get = await axios.get(url);
		res.render("news", { articles: news_get.data.articles, cate:cat.charAt(0).toUpperCase() + cat.slice(1)  });
	} catch (error) {
		if (error.response) {
			console.log(error);
		}
	}
});

/* This is a route that is used to get the news based on the category. */
newsRou.get("/:category", async (req, res) => {
	/* Getting the category from the url. */
	var category = req.params.category;
	try {
		const apiks=["286e21d0f5d04097b85a8e096078828b","6774a7a88fc0411c996360a4d2bea4a8"]
		const apik = apiks[Math.floor(Math.random()*apiks.length)];
		var url =
			"http://newsapi.org/v2/top-headlines?country=in&category=" +
			category +
			`&apiKey=${apik}`;

		// console.log(news_get.data.articles);

		const news_get = await axios.get(url);
		res.render("category", {
			articles: news_get.data.articles,
			cate: category.charAt(0).toUpperCase() + category.slice(1),
		});
	} catch (error) {
		if (error.response) {
			console.log(error);
		}
	}
});

module.exports = newsRou;
