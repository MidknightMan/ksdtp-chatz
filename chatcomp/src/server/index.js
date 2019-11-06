const socketMgr = require('./socketmanager');
// const cors = require('cors');
const app = require('http').createServer();
// app.use(cors());
const io = (module.exports.io = require('socket.io')(app));

const PORT = process.env.PORT || 3231;

io.on('connection', socketMgr);

app.listen(PORT, () => {
  console.log('connected to PORT' + PORT);
});
