import React from 'react';
import './App.css';
import openSocket from 'socket.io-client';

const socketUrl = 'http://10.167.7.49:3231';

class App extends React.Component {
  state = {
    output: [],
    users: [],
    message: '',
    isTyping: null,
    currentUser: '',
    isLoading: true,
    connection: 'off',
    socket: null,
    trigger1: false
  };
  render() {
    const { isLoading, output, message, connection } = this.state;
    if (isLoading === true) return <p>Loading...</p>;
    return (
      <div className="App">
        <header className="App-header">chat component</header>
        <div id="output">
          {output.map((messageText, i) => {
            return <p key={i}>{messageText}</p>;
          })}
        </div>
        <form onSubmit={this.sendMessage}>
          <input
            type="text"
            placeholder="insert message here"
            value={message}
            onChange={this.handleMessageChange}
          />
          <button type="submit">Send</button>
        </form>
        <p>connection: {connection}</p>
      </div>
    );
  }

  sendMessage = event => {
    event.preventDefault();
    const { message, socket } = this.state;
    socket.emit('chatMsg', message);
    this.setState({ message: '' });
  };

  handleMessageChange = event => {
    event.preventDefault();
    this.setState({ message: event.target.value });
  };

  initSocket = () => {
    const socket = openSocket(socketUrl);
    socket.on('connect', () => {
      console.log('connected');
      socket.on('chatMsg', msg => {
        this.setState(currState => {
          return { output: [...currState.output, msg] };
        });
      });
    });
    this.setState({ socket, connection: 'on' });
  };

  componentDidMount() {
    this.setState({ isLoading: false });
    this.initSocket();
  }
}

export default App;
