import React from 'react'
import { ResponsiveGeoMap } from 'nivo'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Map = () => (
    <ResponsiveGeoMap
        features={[]}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        projectionScale={355}
        projectionTranslation={[ 1, 1 ]}
        projectionRotation={[ 0, 0, 0 ]}
        fillColor="#eeeeee"
        borderWidth={0.5}
        borderColor="#333333"
        enableGraticule={true}
        graticuleLineColor="#666666"
    />
)