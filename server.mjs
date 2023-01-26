import express from 'express'
import fs from 'fs'
import path from 'path'
import cookieParser from 'cookie-parser'
import sharp from 'sharp';
const dirname = path.dirname(new URL(import.meta.url).pathname)


const app = express();
app.use(cookieParser());
app.use('/public', express.static('public'));
const port = process.env.PORT|| 3000;
var msgArr = [];
app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.get('/get-one', (req, res) => {
  console.log(`cookies : ${JSON.stringify(req.cookies)}`);
  msgArr.push(1);
  res.cookie('fusio1', 'whoa', {
    maxAge: 60000,
    httpOnly: false
  })
  res.send(`queued`)
})
app.get('/index', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(dirname +'/public/index.html');
})

app.get('/image.png', async  (req, res) => {
  console.log("image");
  const img = await sharp({
    create: {
      width: 1,
      height: 1,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .png()
  .toBuffer();

  res.set('Content-Type', 'image/gif');
  res.send(img);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

