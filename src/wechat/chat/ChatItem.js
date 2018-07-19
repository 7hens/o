import React from "react"

export default class ChatItem extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={require("../res/ic_launcher.png")} style={styles.avatar}/>
        <div style={styles.info}>
          <span style={styles.nickName}>黄洁</span>
          <span style={styles.message}>hello</span>
        </div>
        <span style={styles.time}>17:30</span>
      </div>
    )
  }
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: 12,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 0.1,
    borderBottomStyle: "solid",
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  info: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  nickName: {
    fontSize: 16,
  },
  message: {
    color: "#989898",
    fontSize: 13,
  },
  time: {
    position: "absolute",
    right: 12,
    top: 12,
    fontSize: 13,
    textAlign: "right",
    color: "#ccc",
  }
}