import express from 'express'
import fs from 'fs'
const app = express()
const port = process.env.PORT|| 3000;
var msgArr = [];
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
    msgArr.push(1);
  res.send(`queued cnt is ${cnt}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function myFunc(arg) {
  if(msgArr.length <= 0){
    console.log("no queued")
    return;
  }

  let item = msgArr.pop();
  fs.writeFile("file1.txt", item.toString(), (err) => {
    if (err) throw err;
    console.log(`update file1.txt : ${item}`);
  });
}
setInterval(myFunc, 1000, "");