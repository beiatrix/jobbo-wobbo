import React from 'react'
import styled from 'styled-components'
import { BarEffectiveness } from './BarEffectiveness'

export const BarContainer = ({ data }) => {
    return (
        <StyledBarContainer>
            <div className="text"> 
                <p>And this is how effective each of those methods were. Of the 67 applicationss, [21] led to any next steps at all (whether a phone call, technical screen, or even an on-site).</p>
            </div>
            <br />
            <div style={{height: '60vh'}}>
                <BarEffectiveness data={data} />
            </div>
         </StyledBarContainer>
    )
}

const StyledBarContainer = styled.section`
    margin: 2rem;
`