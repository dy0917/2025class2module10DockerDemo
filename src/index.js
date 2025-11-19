const express = require("express");
const app = express();
require("dotenv").config();

const port = 8080;
app.get("/", (req, res) => {
  res.send(`Hello Kingsley, well done 2 times ${process.env.CUSTOM_VAR}`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
