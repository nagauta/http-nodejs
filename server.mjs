import express from 'express'
import fs from 'fs'
const app = express()
const port = process.env.PORT|| 3000;

app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.get('/get-one', (req, res) => {
  let cnt = 0;
  if(fs.existsSync("file1.txt")){
    // 書き込み
    cnt = Number(fs.readFileSync("file1.txt"));
    console.log(`read file1.txt : ${cnt}`);
  }
    cnt += 1;
    fs.writeFile("file1.txt", cnt.toString(), (err) => {
      if (err) throw err;
      console.log(`update file1.txt : ${cnt}`);
    });
  res.send(`cnt is ${cnt}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
