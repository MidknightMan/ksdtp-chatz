import "./App.css";
import React, { Component } from "react";
import NameForm from "./Components/NameForm";
import socketIO from "socket.io-client";

export default class App extends Component {
  componentDidMount() {
    const socket = socketIO("http://localhost:3000/");
  }

  render() {
    return (
      <div className="App">
        <NameForm title="ksdtp-chat" />
      </div>
    );
  }
}
