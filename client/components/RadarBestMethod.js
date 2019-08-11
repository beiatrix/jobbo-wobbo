import React from 'react'
import { Radar } from 'nivo'

const data = [
    {
      "taste": "fruity",
      "chardonay": 96
    },
    {
      "taste": "bitter",
      "chardonay": 25
    },
    {
      "taste": "heavy",
      "chardonay": 56
    },
    {
      "taste": "strong",
      "chardonay": 62
    },
    {
      "taste": "sunny",
      "chardonay": 29
    }
  ]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const RadarBestMethod = props => (
    <Radar
        data={data}
        keys={["chardonay", "carmenere"]}
        indexBy="taste"
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        width={500}
        height={500}
        curve="linearClosed"
        dotSize={10}
        enableDotLabel={true}
        // colors={{ scheme: 'nivo' }}
        dotLabelYOffset={4}
        gridShape="circular"
        animate={true}
    />
)