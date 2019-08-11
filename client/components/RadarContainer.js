import React from 'react'
import styled from 'styled-components'
import { RadarBestMethod } from './RadarBestMethod'

export const RadarContainer = ({ data }) => {
    return (
        <StyledRadarContainer>
            <div className="text"> 
                <p>Of the 21 applications that led to next steps, 8 of them  led to on-sites. By far, the most effective method that led me to final round interviews with companies was the recruiting platform Triplebyte. This is also the method that landed me my first offer.</p>
            </div>
            <br />
            <div style={{height: '60vh'}}>
                <RadarBestMethod data={data} />
            </div>
         </StyledRadarContainer>
    )
}

const StyledRadarContainer = styled.section`
    margin: 2rem;
`