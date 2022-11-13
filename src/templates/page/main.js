import * as React from "react"
import styled from "styled-components"

const Main = styled.main`
  color: #333333;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;

  font-size: 18px;
  font-family: 'Merriweather', serif;
  font-family: 'Times New Roman', sans-serif;
  `

const MainContainer = ({ children }) => {
  return (
    <Main>
      { children }
    </Main>
  )
}

export default MainContainer

