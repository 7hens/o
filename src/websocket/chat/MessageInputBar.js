import React from "react"
import styled from "styled-components/native"

export default class MessageInputBar extends React.Component {
  state = {
    content: ""
  }

  submit = () => {
    const { content } = this.state
    if (content) {
      this.setState({ content: "" })
      this.props.onSubmit(content)
    }
  }

  render() {
    const { style } = this.props
    return (
      <Container style={style}>
        <Input value={this.state.content}
          numberOfLines={1}
          autoFocus={true}
          onSubmitEditing={this.submit}
          onChangeText={content => this.setState({ content })}/>
        <Submit title="发送" onPress={this.submit}/>
      </Container>
    )
  }
}

const Container = styled.View`
  flex-direction: row;
  border-top-width: 1px;
  border-color: #ccc;
  padding: 8px;
`

const Input = styled.TextInput`
  flex-grow: 1;
  border-bottom-width: 1px;
  border-color: #ccc;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 8px;
`

const Submit = styled.Button`
  padding: 8px;
`