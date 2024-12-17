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
});

// use app.post to accept a post request
app.post("/quotes", async function (req, res) {
  //console.log(req.body);
  // use the body of the request to create a new quote using the addQuote helper method
  // send a status 201
  res.status(201).send(await addQuote(req.body.quoteText, req.body.author));
});

// use app.patch to handle a patch request
// get the quote by ID specified in the endpoint at /quotes/:id
// set the quoteText and author to these fields in the body of the user's message
// send a status 200
app.patch("/quotes/:id", async function (req, res) {
  res
    .status(200)
    .json(await editQuote(req.params.id, req.body.quoteText, req.body.author));
});

app.delete("/quotes/:id", async function (req, res) {
  res.status(200).json(await deleteQuote(req.params.id));
});
