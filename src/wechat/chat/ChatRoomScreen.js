import React from "react"
import MessageTile from "./MessageTile"

export default class ChatRoomScreen extends React.Component {
  render() {
    return (
      <div>
        {mockedData.map(it =><MessageTile data={it} key={it.time}/>)}
      </div>
    )
  }
}

const mockedData = [
  {
    time: 123435353,
    user: {
      avatar: "/src/res/ic_launcher.png",
      name: "wechat"
    },
    message: {
      type: "text",
      content: "hello"
    }
  }
]