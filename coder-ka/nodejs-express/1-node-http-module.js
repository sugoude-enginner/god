const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url)

  if (request.url === "/hoge/fuga") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>MY SITE</title>
        </head>
        <body>
          welcome hoge fuga
        </body>
      </html>
    `);
    response.end();
  } else {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>MY SITE</title>
        </head>
        <body>
          welcome
        </body>
      </html>
    `);
    response.end();
  }
});

server.listen(8000);


// ヘッダー・ボディ（HTTPリクエスト＝HTTPクライアント＝ブラウザ側がつくるもの）
// ヘッダー・ボディ（HTTPレスポンス＝HTTPサーバーがつくるもの）
// MIMETYPE（マイムタイプ）