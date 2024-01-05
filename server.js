const { log } = require('console');
const express = require('express');
const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

let buyers = 0;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.render(__dirname + '/index', { "buyers": buyers });
});

app.post('/', (req, res) => {
  // res.render(__dirname + '/index', { "buyers": buyers });
  console.log("Here")
  console.log(req.body)
  if (req.body.status == "success") {
    buyers++
  }
});


app.listen(3000, () => {
  console.log('listening on *:3000');
});
