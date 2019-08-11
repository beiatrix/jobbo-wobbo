import React from 'react'
import { ResponsiveBar } from 'nivo'

const data = [
  {
    country: 'AD',
    'hot dog': 85,
    'hot dogColor': 'hsl(118, 70%, 50%)',
    burger: 40,
    burgerColor: 'hsl(301, 70%, 50%)',
    sandwich: 171,
    sandwichColor: 'hsl(37, 70%, 50%)',
    kebab: 152,
    kebabColor: 'hsl(148, 70%, 50%)',
    fries: 0,
    friesColor: 'hsl(351, 70%, 50%)',
    donut: 131,
    donutColor: 'hsl(235, 70%, 50%)'
  },
  {
    country: 'AE',
    'hot dog': 82,
    'hot dogColor': 'hsl(147, 70%, 50%)',
    burger: 112,
    burgerColor: 'hsl(95, 70%, 50%)',
    sandwich: 6,
    sandwichColor: 'hsl(40, 70%, 50%)',
    kebab: 131,
    kebabColor: 'hsl(277, 70%, 50%)',
    fries: 146,
    friesColor: 'hsl(159, 70%, 50%)',
    donut: 4,
    donutColor: 'hsl(168, 70%, 50%)'
  },
  {
    country: 'AF',
    'hot dog': 52,
    'hot dogColor': 'hsl(334, 70%, 50%)',
    burger: 1,
    burgerColor: 'hsl(110, 70%, 50%)',
    sandwich: 149,
    sandwichColor: 'hsl(186, 70%, 50%)',
    kebab: 167,
    kebabColor: 'hsl(252, 70%, 50%)',
    fries: 64,
    friesColor: 'hsl(283, 70%, 50%)',
    donut: 114,
    donutColor: 'hsl(119, 70%, 50%)'
  },
  {
    country: 'AG',
    'hot dog': 25,
    'hot dogColor': 'hsl(305, 70%, 50%)',
    burger: 54,
    burgerColor: 'hsl(18, 70%, 50%)',
    sandwich: 83,
    sandwichColor: 'hsl(282, 70%, 50%)',
    kebab: 123,
    kebabColor: 'hsl(116, 70%, 50%)',
    fries: 185,
    friesColor: 'hsl(17, 70%, 50%)',
    donut: 101,
    donutColor: 'hsl(207, 70%, 50%)'
  },
  {
    country: 'AI',
    'hot dog': 143,
    'hot dogColor': 'hsl(161, 70%, 50%)',
    burger: 61,
    burgerColor: 'hsl(137, 70%, 50%)',
    sandwich: 62,
    sandwichColor: 'hsl(246, 70%, 50%)',
    kebab: 105,
    kebabColor: 'hsl(246, 70%, 50%)',
    fries: 190,
    friesColor: 'hsl(33, 70%, 50%)',
    donut: 135,
    donutColor: 'hsl(153, 70%, 50%)'
  },
  {
    country: 'AL',
    'hot dog': 147,
    'hot dogColor': 'hsl(202, 70%, 50%)',
    burger: 64,
    burgerColor: 'hsl(326, 70%, 50%)',
    sandwich: 193,
    sandwichColor: 'hsl(346, 70%, 50%)',
    kebab: 138,
    kebabColor: 'hsl(25, 70%, 50%)',
    fries: 59,
    friesColor: 'hsl(224, 70%, 50%)',
    donut: 167,
    donutColor: 'hsl(95, 70%, 50%)'
  },
  {
    country: 'AM',
    'hot dog': 99,
    'hot dogColor': 'hsl(103, 70%, 50%)',
    burger: 194,
    burgerColor: 'hsl(30, 70%, 50%)',
    sandwich: 86,
    sandwichColor: 'hsl(254, 70%, 50%)',
    kebab: 38,
    kebabColor: 'hsl(212, 70%, 50%)',
    fries: 10,
    friesColor: 'hsl(356, 70%, 50%)',
    donut: 193,
    donutColor: 'hsl(315, 70%, 50%)'
  }
]

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const BarEffectiveness = props => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{
      top: 50,
      right: 130,
      bottom: 50,
      left: 60
    }}
    padding={0.3}
    layout="horizontal"
    colors="nivo"
    colorBy="id"
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      {
        match: {
          id: 'fries'
        },
        id: 'dots'
      },
      {
        match: {
          id: 'sandwich'
        },
        id: 'lines'
      }
    ]}
    borderColor="inherit:darker(1.6)"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="inherit:darker(1.6)"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
)
