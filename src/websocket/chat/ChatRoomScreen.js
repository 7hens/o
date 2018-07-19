import React from "react"
import MessageInputBar from "./MessageInputBar"
import styled from "styled-components/native"
import { FlatList, Dimensions } from "react-native"
import ChatMessage from "./ChatMessage";

const windowHeight = Dimensions.get("window").height;

export default class ChatRoomScreen extends React.Component {
  render() {
    const { onSubmit, messageList } = this.props
    console.log("messageList", messageList)
    return (
      <Container>
        <StyledMessageInputBar onSubmit={onSubmit}/>
        <MessageList>
          <ChatMessage message="hello"/>
          <ChatMessage message="hello" myself/>
          <ChatMessage message="hello" myself/>
          <ChatMessage message="hello"/>
          <ChatMessage message="hello" myself/>
          <ChatMessage message="hello"/>
          { messageList.map(item => {
            return <ChatMessage message={item.msg} 
              key={item.time.toString()}
              myself={window.location.origin === item.source}/>
          }) }
        </MessageList>
      </Container>
    )
  }
}

const Container = styled.View`
  flex-direction: column-reverse;
  flex-grow: 1;
  height: ${windowHeight}px;
  width: 100%;
`

const MessageList = styled.ScrollView`
  flex-grow: 1;
  padding: 8px;
`

const StyledMessageInputBar = styled(MessageInputBar)`
`