const loginButton = document.getElementById("login-button")
const mailInput = document.getElementById("mail-input")

// サーバーに送る
// Fetch APIを使おう
// [https://localhost:3000]/js/login-button.js
// エンドポイントに対してどういうリクエスト、レスポンスが返ってくるか？（アプリケーションプログラミングインターフェース ＝ API）WebAPI
// in-out 決まりだけ。インターフェース ＝ 境界  境界（（（（実装））））境界 レイヤード 低レイヤー DOMAPI ＝ 高レベルAPI
// 境界（抽象的） 実装（具体的）
// ボタンを押したら、書いたメールアドレスに飛んで・・・（ユーザーにとっての抽象度:高） 
// ボタンにクリックイベント・・・                  （おれら）
// fetchAPIの内部のあれを使って・・・             （低レイヤー）
// 抽象度、合ってる？ →これ大事
// TMBC発祥・・・・・
// ここで問題です
// バナナ 果物 
// 犬 猫 動物
// オブジェクト指向 banana class extends kudamono class{
// } 
// 概念が階層化された状態を表現するためのツールが（クラスとか型）言語機能 ◎

// HEAD OPTION GET PUT POST DELETE ...

fetch('/js/login-button.js', {
    method: 'GET'
}).then(response => {
    response.text().then(jsSource => console.log(jsSource))
})

//入力されたメールアドレス→サーバー






//匿名関数
//email-confirmation

loginButton.addEventListener("click", function () {
    const email = mailInput.value
    if (!validator.isEmail(email)) {
        alert("i want you!!!")
        return
    }
    fetch("/email-confirmation",{
        method: "POST",
        body: JSON.stringify({
            email
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
})

// Content-Type: text/plain
// Content-Type: application/json
console.log(!"")
console.log(!undefined)
console.log(!null)
console.log(!0)
console.log(!{})
console.log(![])

console.log(JSON.stringify({ a: 'aaa', b: 'bbb' }))
