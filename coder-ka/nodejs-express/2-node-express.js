const express = require("express");
const server = express();
const port = 3000;

// 静的
server.use(express.static(__dirname + "/public"));

// 動的
// articles/fuga
// articles/test
server.get("/articles/:articleId", (req, res) => {
  res.send("Hello World!" + req.params.articleId);
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
