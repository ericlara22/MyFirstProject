const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/:id", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
