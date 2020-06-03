const express = require('express'),
      bodyParser = require('body-parser'),  //post 쓰려고
      app = express(); //앱에 적용
const port = 5000;

// postgresql 에서 db 값을 가져오기위한 데이터
const Pool = require('pg-pool');
const config = {
  user: 'postgres',
  password:'dufdlsla*814',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
};
let pool = new Pool(config);



//바디 파서 ->  post 값 받기 위해 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/contents/chart', (req, res)=>{
  pool.connect().then(client => {
    client.query('select *from recipes').then(result => {
      client.release();  //매번 db를 쓰면 쓰고 종료했다는 표시 해줘야함
      res.send(result.rows);
    console.log('return json type:', result.rows)
    })
    .catch(e => {
      client.release()
      console.error('query error', e.message, e.stack)
    })
  })
});
app.listen(port , ()=>console.log(`Listening on port ${port}`));
