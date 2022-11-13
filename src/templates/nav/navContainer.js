import * as React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  background-color: #343131;
  width: 300px;
  height: 100vh;
  margin: 0px;
  padding: 0px;
`


const navContainer = ({ children }) => {
  return (
    <Nav>
      { children }
    </Nav>
  )
}

export default navContainer

