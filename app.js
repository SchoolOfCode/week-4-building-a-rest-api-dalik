import express from "express";
const app = express();
const PORT = 3000;

import {
  getQuotes,
  getQuoteByID,
  addQuote,
  editQuote,
  deleteQuote,
} from "./quote.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the inspirational quotes API");
});

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});

app.get("/quotes", async function (req, res) {
  //respond with all quotes from quotes.json
  res.status(200).json(await getQuotes());
});

app.get("/quotes/:id", async function (req, res) {
  //use helper function to get particular ID
  res.status(200).json(await getQuoteByID(req.params.id));
  // res.send("quotes got get got");
});
