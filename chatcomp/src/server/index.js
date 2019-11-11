const socketMgr = require('./socketmanager');

const app = require('http').createServer();

const io = (module.exports.io = require('socket.io')(app));

const PORT = process.env.PORT || 3231;

// io.on('connection', socketMgr);

io.on('connection', socket => {
  console.log('socket id :' + socket.id);
  socket.on('chatMsg', msg => {
    console.log(msg);
    io.emit('chatMsg', msg);
  });
});

app.listen(PORT, () => {
  console.log('connected to PORT' + PORT);
});
