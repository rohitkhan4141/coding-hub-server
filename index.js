const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id == id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
