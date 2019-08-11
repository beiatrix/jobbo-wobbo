import React from 'react'
import styled from 'styled-components'
import { PieMethods } from './PieMethods'

export const PieContainer = ({ data }) => {
    return (
        <StyledPieContainer>
            <p>These were the 9 methods I used to apply to companies.</p>
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