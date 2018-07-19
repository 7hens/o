import React from "react"
import ChatRoomScreen from "./chat/ChatRoomScreen";

export default class App extends React.Component {
  state = {
    messageList: []
  }

  componentWillMount() {
    const ws = new WebSocket("ws://192.168.1.100:8081")
    ws.onopen = function (event) {
      console.log("Connection to server opened")
    }
    ws.onmessage = (msg) => {
      console.log("message", msg)
      msg = JSON.parse(msg.data)
      const { messageList } = this.state
      messageList.push(msg)
      this.setState({ messageList })
    }
    this.ws = ws
  }

  sendMessage = (text) => {
    const msg = { 
      msg: text,
      time: new Date().getTime(),
      source: window.location.origin
    }
    this.ws.send(JSON.stringify(msg))
    const { messageList } = this.state
    messageList.push(msg)
    this.setState({ messageList })
  }

  render() {
    return (
      <ChatRoomScreen onSubmit={this.sendMessage}
        messageList={this.state.messageList}/>
    )
  }
}