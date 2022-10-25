const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
