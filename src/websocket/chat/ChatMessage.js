import React from "react"
import styled from "styled-components/native"

export default class ChatMessage extends React.Component {
  render() {
    const { message, myself } = this.props
    return (
      <Container style={{ flexDirection: myself ? "row-reverse" : "row" }}>
        <Avatar source={require("../../wechat/res/ic_launcher.png")}/>
        <Message>{message}</Message>
      </Container>
    )
  }
}

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`

const Container = styled.View`
`

const Message = styled.Text`
  margin: 4px 8px;
  border-color: #ccc;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  padding: 8px;
`