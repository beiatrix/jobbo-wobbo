import React, {Component} from 'react'
import {Pie} from './Pie'
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
export default class PieContainer extends Component {
  constructor() {
    super()
    this.state = {
      jobbos: []
    }
  }

  async componentDidMount() {
    // get jobbos from server
    const res = await axios.get('/api/jobbos')
    const jobbos = res.data
    // console.log(jobbos)
    this.setState({jobbos})
    console.log('state', this.state)
  }

  render() {
    return <Pie />
  }
}
