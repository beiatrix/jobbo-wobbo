import React from 'react'
import styled from 'styled-components'

export const Header = props => {
  return (
    <StyledHeader>
      <div id="headerContent">
        <h1>jobbo wobbo</h1>
        <h3>
          my name is beiatrix. i'm a software engineer and visual designer.
          this is a datavis of my journey to finding my first engineering job in 2019. 
        </h3>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    color: var(--highlight);
  }

  #headerContent {
    width: 40vw;
  }
`