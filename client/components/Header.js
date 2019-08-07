import React from 'react'
import styled from 'styled-components'

export const Header = props => {
  return (
    <StyledHeader>
      {/* <h1>hello there</h1> */}
      <div id="text">
        <h1>jobbo wobbo</h1>
        <h2>
          my name is beiatrix. i'm a software developer and visual designer.
          this is a datavis of my job search in 2019.
        </h2>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  header {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  header h1 {
    font-family: 'Righteous', 'Times New Roman', 'Times', serif;
    margin-bottom: 2rem;
  }

  header #text {
    width: 50vw;
  }
`