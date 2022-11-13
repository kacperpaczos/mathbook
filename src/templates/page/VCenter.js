import * as React from "react"
import styled from "styled-components"

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

const FlexContainer = ({ children }) => {
  return (
    <Vbox>
      { children }
    </Vbox>
  )
}

export default FlexContainer

