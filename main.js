const fs = require("fs");

// sample_03.jsonからデータを読み込む
fs.readFile("sample_03.json", "utf8", (err, data) => {
  if (err) {
    console.error("ファイル読み込み時にエラーが発生しました:", err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    // idの値を1からの連番に修正
    jsonData.data.forEach((item, index) => {
      item.id = index + 1;
    });

    // 修正後のデータをsample_04.jsonに書き込む
    fs.writeFile(
      "sample_04.json",
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("ファイル書き込み時にエラーが発生しました:", err);
          return;
        }
        console.log("sample_04.jsonにデータを書き込みました。");
      }
    );
  } catch (parseError) {
    console.error("JSON解析時にエラーが発生しました:", parseError);
  }
});
