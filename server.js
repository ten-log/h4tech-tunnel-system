const express = require('express'),
      bodyParser = require('body-parser'),  //post 쓰려고
      cors = require('cors'),
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

app.use(cors());

//바디 파서 ->  post 값 받기 위해 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




//YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF
app.get('/haeder/usertable', (req, res)=>{
  pool.connect().then(client => {
    client.query('select user_name from usertable').then(result => {
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

//co2 chart
app.get('/content/co2table', (req, res)=>{
  pool.connect().then(client => {
    client.query('select year, cotwo from co2table').then(result => {
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

// devicetable
app.get('/content/devicetable', (req, res)=>{

  let sql = 'select id as "key" , de_user as "User" , de_name as "Device" , de_locat as "Location" , de_user_phone as "Phone" , de_admit as "Admit"  from devicetable';
  pool.connect().then(client => {
    client.query(sql).then(result => {
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

app.post('/content/devicetable', (req, res)=>{
  let id = req.body.key;
  let de_user= req.body.User;
  let de_name = req.body.Device;
  let de_locat = req.body.Location;
  let de_user_phone = req.body.Phone;
  let de_admit = req.body.Admit;
  console.log(id);
  console.log(de_user);
  console.log(de_name);
  console.log(de_locat);
  console.log(de_user_phone);
  console.log(de_admit);

  let sql = {
  text: 'INSERT INTO recipes (id, de_user ,de_name, de_locat, de_user_phone, de_admit ) VALUES ($1, $2, $3, $4, $5, $6)',
  values: [id, de_user ,de_name, de_locat, de_user_phone, de_admit ]
  }
  //let params = [image, name , birthday, gender, job];
  //let sql = `INSERT INTO recipes (image, name , birthday, gender, job ) VALUES (${image},${name},${birthday},${gender},${job})`;
  pool.connect().then(client => {
    client.query(sql).then(result => {
      client.release()
      //    res.send(result.rows);
    console.log('insert query:', sql )
    })
    .catch(e => {
      client.release()
      console.error('insert query error', e.message, e.stack)
    })
  })
})


app.listen(port , ()=>console.log(`Listening on port ${port}`));
