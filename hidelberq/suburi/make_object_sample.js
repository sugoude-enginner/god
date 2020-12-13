// 配列の要素のオブジェクトのキー "a" を "b" に変更したオブジェクトの作成
const src = {
  "data": [
    {"a": 123},
    {"a": 234}
  ]
};

// src から以下のようなオブジェクトを作成する
// {
//   "data": [
//     {"b": 123},
//     {"b": 234}
//   ]
// };

let dest = {"data": []}

// object, for, array(配列)
for (const i in src.data) {
  console.log(src.data[i]);
  const newData = {b: src.data[i].a}
  console.log(newData);

  dest.data.push(newData);
}

// JSON でキレイに表示する
console.log("src", JSON.stringify(src, null, 2));
console.log("dest", JSON.stringify(dest, null, 2));
