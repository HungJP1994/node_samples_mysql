//MySQL モジュール読み込み
const mysql = require('mysql');

//MySQL 設定&作成
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '8080',
    password: '',
});
//DB接続
con.connect((err) => {
    if (err) throw err;
    console.log('connect success!');
})
//DB接続終了
con.end();