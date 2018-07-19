import React from "react"
import ChatRoomScreen from "./wechat/chat/ChatRoomScreen"
import LoginScreen from "./wechat/session/LoginScreen"
import ChatItem from "./wechat/chat/ChatItem"
import { Route, Link } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import Switch from "react-router-dom/Switch";
import NavigationBar from "./wechat/etc/NavigationBar";
import HomeScreen from "./wechat/etc/HomeScreen";
import UserProfile from "./wechat/user/UserProfile";

export default class App extends React.Component {
  render() {
    return (
      <UserProfile/>
    )
  }
}