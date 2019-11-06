import "./App.css";
import React, { Component } from "react";
import Layout from "./Components/Layout";
import socketIO from "socket.io-client";

export default class App extends Component {
  componentDidMount() {
    const socket = socketIO("http://localhost:3000/");
  }

  render() {
    return (
      <div className="App">
        <Layout title="ksdtp-chat" />
      </div>
    );
  }
}
