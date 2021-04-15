//基本constでやる制約をつけろ
const express = require("express");
const {Base64} = require('js-base64');
const server = express();
const port = 3000;

// チームビルディングの話
// Googleのチーム 「プロジェクト・アリストテレス」
// 全体は部分の総和に勝る
// 心理的安全の概念誕生

const [one,two,three] = [1,2,3]
const { name } = { name: 'hoge' }

server.use((req, res, next) => {
    // ルーティングを行う
    console.log(req.get("Authorization")) // 'Basic YtPh'
    const name = "ogawa";
    const id =  "yoshihiro";
    let decode;
    let decode2;

    if( req.get("Authorization") !== undefined){
        const  preDecode = req.get("Authorization")
        const  splitDecode = preDecode.split(" ")
        decode = Base64.decode(splitDecode[1]) //ogawa:yoshihiro
        console.log(Base64.decode(splitDecode[1]))
        decode2 = decode.split(":")
        console.log(decode2[2])
        

    }else{

    }
    
    if (decode2 !== undefined && decode2[0] == "ogawa" && decode2[1] == "yoshihiro") {
        // IDとPWが一致した場合
        next()
    } else {
        res.set("WWW-Authenticate","Basic")
        res.status(401)


        
        res.send('このサイトを見る権限がありません')
    }
})

// あとでサイト見に行け
//静的サイトホスティング
server.use(express.static(__dirname + "/public"));

//server.get("/articles/:")

server.listen(port, () => {
    console.log(`Zenjin Server Started at http://localhost:${port}`);
});