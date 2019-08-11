import React from 'react'
import styled from 'styled-components'
import { PieMethods } from './PieMethods'

export const PieContainer = ({ data }) => {
    return (
        <StyledPieContainer>
            <div className="text"> 
                <p>These were the 9 methods I used to apply to companies.</p>
            </div>
            <br />
            <div style={{height: '60vh'}}>
                <PieMethods data={data} />
            </div>
         </StyledPieContainer>
    )
}

const StyledPieContainer = styled.section`
    margin: 2rem;
`