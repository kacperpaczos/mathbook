import * as React from "react"
import styled from "styled-components"

const TitleBox = styled.div`
  background-color: #2980b9;
  width: 100%;
  min-height: 160px;
  padding: 0px;
`


const navContainerTitleBox = ({ children }) => {
  return (
    <TitleBox>
      { children }
    </TitleBox>
  )
}

export default navContainerTitleBox

