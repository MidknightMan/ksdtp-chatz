import React from 'react';
// import * as apiChat from './apiChat';
import './App.css';
import io from 'socket.io-client';

const socketUrl = 'http://192.168.230.125:3231';

class App extends React.Component {
  state = {
    output: [],
    users: [],
    message: '',
    isTyping: null,
    currentUser: '',
    isLoading: true,
    connection: 'off',
    socket: null
  };
  render() {
    const { isLoading, output, message, connection } = this.state;
    if (isLoading === true) return <p>Loading...</p>;
    return (
      <div className="App">
        <header className="App-header">chat component</header>
        <form onSubmit={this.sendMessage}>
          <div id="output">
            {output.map(messageText => {
              return <li key={messageText}>{messageText}</li>;
            })}
          </div>
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
    const { message } = this.state;
    const socket = io(socketUrl);
    socket.emit('chatMsg', message);
    this.setState(currentState => {
      return { output: [...currentState.output, message] };
    });
  };

  handleMessageChange = event => {
    event.preventDefault();
    const messageText = event.target.value;
    this.setState({ message: messageText });
  };

  initSocket = () => {
    const socket = io(socketUrl);
    socket.on('connect', () => {
      console.log('connected');
    });
    this.setState({ socket, connection: 'on' });
  };

  componentDidMount() {
    console.log('firing');
    this.setState({ isLoading: false });
    this.initSocket();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.output.length !== prevState.output.length) {
      this.setState({ message: '', isLoading: false });
    }
    const socket = io(socketUrl);
    socket.on('chatMsg', msg => {
      this.setState(currentState => {
        return { output: [...currentState.output, msg] };
      });
    });
  }
}

export default App;
