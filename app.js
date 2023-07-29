const app = require("express")();
const port = 3000;
const router = require("./routes/index.js");

app.get("/", (req, res) => {
  res.send("<h1><marquee>INDEX</marquee></h1>");
});

app.use(router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
