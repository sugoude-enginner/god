//基本constでやる制約をつけろ
const express = require("express");
const server = express();
const port = 3000;

// あとでサイト見に行け
//静的サイトホスティング
server.use(express.static(__dirname + "/public"));

//server.get("/articles/:")

server.listen(port, () => {
    console.log(`Zenjin Server Started athttp://localhost:${port}`);
});