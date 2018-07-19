import React from "react"
import styled from "styled-components"
import tabs from "./tabs"

export default class NavigationBar extends React.Component {
  state = {
    selectedTabIndex: 0,
  }

  render() {
    const { selectedTabIndex } = this.state
    return (
      <Container>
        {tabs.map((it, index) => {
          const active = index === selectedTabIndex
          return (
            <Tab key={it.name} onClick={() => this.setState({ selectedTabIndex: index })}>
              <Icon src={active ? it.icons.active : it.icons.normal}/>
              <Title active={active}>{it.name}</Title>
            </Tab>
          )
        })}
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ccc;
  padding: 4px;
  background-color: white;
`

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Icon = styled.img`
  width: 28px;
`

const Title = styled.span`
  font-size: 12px;
  color: ${it => it.active ? "#96cf99" : "#999"};
`