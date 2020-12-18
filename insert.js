// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');

//db: connect()
const con = db.connect();

const password = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';
let posts = [ 
    { first_name: 'hungnguyen', last_name: '一郎', email: 'hungnguyen@example.com', password: password, },
    { first_name: 'baocho', last_name: '二郎', email: 'baocho@example.com', password: password, },
    { first_name: 'trangbo', last_name: '三郎', email: 'trangbo@example.com', password: password, },
]

let sql = 'INSERT INTO users SET ?;';
posts.forEach((post) => {
    con.query(sql, post, (err, results) => {
        if (err) console.log(err.sqlMessage);
        console.log('insert success.');
    })
})

//DB接続終了
con.end();