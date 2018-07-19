import React from "react"

export default class MessageTile extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <img src={require("../res/ic_launcher.png")} style={styles.avatar}/>
      </div>
    )
  }
}

const styles = {
  avatar: {
    width: 40,
    height: 40,
  }
}