import React from "react"

export default class LoginScreen extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>手机号登录</h1>
        <div style={styles.formTile}>
          <span style={styles.formTitle}>国家/地区</span>
          <span>中国（+86）</span>
        </div>
        <div style={styles.formTile}>
          <span style={styles.formTitle}>手机号</span>
          <input type="text" placeholder="你的手机号码"/>
        </div>
        <span>用微信号/QQ号/邮箱登录</span>
        <button>下一步</button>
      </div>
    )
  }
}

const styles = {
  container: {
    padding: 12,
  },
  formTile: {
    display: "flex",
    alignItems: "center",
    height: 48,
    paddingLeft: 10,
    marginTop: 10,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  formTitle: {
    fontSize: 16,
    color: "#353535",
  }
}