import React from "react"
import { ScrollView, StyleSheet, Dimensions } from "react-native"

export default class ViewPager extends React.Component {
  state = {
    itemSize: "100%",
  }

  render() {
    const {horizontal} = this.props
    const size = horizontal ? "width" : "height"
    return (
      <ScrollView {...this.props} 
        onLayout={event => {
          const { width, height } = event.nativeEvent.layout
          this.setState({ itemSize: horizontal ? width : height })
        }}>
        {this.props.children.map(child => {
          return <View style={{ [size]: itemSize }}>{child}</View>
        })}
        </ScrollView>
    )
  }
}