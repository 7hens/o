import React from "react";
import styled from "styled-components/native";
import NavigationBar from "./NavigationBar";
import ChatItem from "../chat/ChatItem";
import { Dimensions } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <HorizontalScroll horizontal pagingEnabled>
          <Content>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
          </Content>
          <Content>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
          </Content>
          <Content>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
          </Content>
        </HorizontalScroll>
        <NavigationBar/>
      </Container>
    )
  }
}

const { width, height } = Dimensions.get("window");

const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding-bottom: 44px;
`

const HorizontalScroll = styled.ScrollView`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`

const Content = styled.View`
  width: ${width}px;
`