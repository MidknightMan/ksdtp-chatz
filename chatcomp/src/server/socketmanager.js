const io = require('./index.js').io;
module.exports = function(socket) {
  console.log('socket id :' + socket.id);
  socket.on('chatMsg', msg => {
    console.log(msg);
    socket.emit('chatMsg', msg);
  });
};
