import React from 'react'
import styled from 'styled-components'
import { Calendar } from './Calendar'

export const CalContainer = ({ data }) => {
    return (
        <StyledCalContainer>
            <div className="text"> 
                <p>This calendar illuminates what my job-hunting activity looks like over time...</p>
            </div>
            <br />
            <div style={{height: '60vh'}}>
                <Calendar data={data} />
            </div>
         </StyledCalContainer>
    )
}

const StyledCalContainer = styled.section`
    margin: 2rem;
`