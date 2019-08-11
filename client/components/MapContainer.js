import React from 'react'
import styled from 'styled-components'
import { Map } from './Map'

export const MapContainer = ({ data }) => {
    return (
        <StyledMapContainer>
            <div className="text"> 
                <p>And this map shows where my on-site interviews were located.</p>
            </div>
            <br />
            <h3>// NOTE - maybe this is a mapbox module?</h3>
            {/* <div style={{height: '60vh'}}>
                <Map data={data} />
            </div> */}
         </StyledMapContainer>
    )
}

const StyledMapContainer = styled.section`
    margin: 2rem;
`