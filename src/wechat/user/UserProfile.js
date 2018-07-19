import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"

export default class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton aria-label="Menu">
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}