//基本constでやる制約をつけろ
const express = require("express");
const { Base64 } = require('js-base64');
const bodyParser = require('body-parser')
const validator = require('validatorjs');
const server = express();
const port = 3000;

// チームビルディングの話
// Googleのチーム 「プロジェクト・アリストテレス」
// 全体は部分の総和に勝る
// 心理的安全の概念誕生

const [one, two, three] = [1, 2, 3]
const { name } = { name: 'hoge' }

server.use((req, res, next) => {
    // ルーティングを行う
    // console.log(req.get("Authorization")) // 'Basic YtPh'
    // const name = "ogawa";
    // const id = "yoshihiro";
    // let decode;
    // let decode2;

    // if (req.get("Authorization") !== undefined) {
    //     const preDecode = req.get("Authorization")
    //     const splitDecode = preDecode.split(" ")
    //     decode = Base64.decode(splitDecode[1]) //ogawa:yoshihiro
    //     console.log(Base64.decode(splitDecode[1]))
    //     decode2 = decode.split(":")
    //     console.log(decode2[2])


    // } else {

    // }

    function parseBasicAuthorizationHeader(authorizationHeader) {
        const [method, base64Encoded] = authorizationHeader.split(' ')

        if (method !== 'Basic') {
            return null
        }

        const [userName, password] = Base64.decode(base64Encoded).split(':')

        return { userName, password }
    }

    /**
     * authorizationHeader HTTPリクエストのAuthorizationヘッダー
     * 
     * 例）Basic abcdefg
     */
    function hasValidCredential(authorizationHeader) {
        const credential = parseBasicAuthorizationHeader(authorizationHeader)

        return credential !== null && credential.userName === 'ogawa' && credential.password === 'yoshihiro' // 論理積Ver

        // return credential === null ? false : credential.userName === 'ogawa' && credential.password === 'yoshihiro' // 3項演算子Ver

        // if (credential === null) {
        //     return false
        // } else {
        //     return credential.userName === 'ogawa' && credential.password === 'yoshihiro'
        // }
    }

    const authorizationHeader = req.get("Authorization")

    const isAuthenticated = authorizationHeader !== undefined && hasValidCredential(authorizationHeader)

    if (isAuthenticated) {
        next()
    } else {
        res.set("WWW-Authenticate", "Basic")
        res.status(401)
        res.send('このサイトを見る権限がありません')
    }
})

// あとでサイト見に行け
//静的サイトホスティング
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.json())

server.post("/email-confirmation",(req, res, next) =>{

    const email = req.body.email;
    if (validator.isEmail(email)) {
    res.status(400)
    res.end()
        
    }else{
    console.log(req.body)//{ email: 'aaa@example.com' }
    res.status(200)
    res.end()
    //req.body.email
    //mailサーバーを経由して送る
    }

})

//server.get("/articles/:")

server.listen(port, () => {
    console.log(`Zenjin Server Started at http://localhost:${port}`);
});