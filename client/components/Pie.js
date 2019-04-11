import React, {Component} from 'react'
import {ResponsivePie} from 'nivo'
// import {getJobbosFromServer} from '../store'
import {connect} from 'react-redux'
import axios from 'axios'

const dummyData = [
  {
    id: 'python',
    label: 'python',
    value: 135,
    color: 'hsl(303, 70%, 50%)'
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 63,
    color: 'hsl(3, 70%, 50%)'
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 391,
    color: 'hsl(107, 70%, 50%)'
  },
  {
    id: 'hack',
    label: 'hack',
    value: 518,
    color: 'hsl(148, 70%, 50%)'
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 595,
    color: 'hsl(341, 70%, 50%)'
  }
]

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
export default class Pie extends Component {
  constructor() {
    super()
    this.state = {
      jobbos: []
    }
  }

  async componentDidMount() {
    // get jobbos from server
    const res = await axios.get('/api/jobbos')
    console.log(res.data)

    // const jobbos = await this.props.getJobbosFromServer()
    // console.log('jobbyz', jobbos)
    // console.log('before', this.state)
    // this.setState({
    //   jobbos
    // })
    // console.log('after', this.state)
    // console.log('props', this.props)

    // console.log(this.props.jobbos)
  }

  render() {
    // const {jobbos} = this.state
    // console.log('WHAT ARE MY PROPS', this.props)

    return (
      <ResponsivePie
        data={dummyData}
        margin={{
          top: 40,
          right: 80,
          bottom: 80,
          left: 80
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors="nivo"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.2)"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'ruby'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'c'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'go'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'python'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'scala'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'lisp'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'elixir'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'javascript'
            },
            id: 'lines'
          }
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    )
  }
}

// const mapStateToProps = state => ({
//   jobbos: state.jobbos
// })

// const mapDispatchToProps = dispatch => ({
//   getJobbosFromServer: () => dispatch(getJobbosFromServer())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Pie)
