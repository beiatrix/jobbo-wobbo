import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import {
  Header,
  Overview,
  PieContainer,
  BarContainer,
  RadarContainer,
  CalContainer,
  MapContainer,
  Insights
} from './components'

export default () => {
  const [jobbos, setJobbos] = useState([])

  useEffect(() => {
    const fetchJobbos = async () => {
      const { data } = await axios.get('/api/jobbos')
      setJobbos(data)
    }
    fetchJobbos()
  }, [setJobbos])

    return (
      <StyledApp>
        <div id="appContainer">
          <Header />
          <h2>what have i done?</h2>
          <Overview data={jobbos} />
          <h2>how did i do it?</h2>
          <PieContainer data={jobbos} />
          <BarContainer />
          <RadarContainer />
          <CalContainer />
          <MapContainer />
          <h2>what did i learn?</h2>
          <Insights />
        </div>
      </StyledApp>
    )
  }

const StyledApp = styled.main`
  display: flex;
  justify-content: center;

  #appContainer {
    width: 80vw;
  }

  .text {
    width: 50vw;
    margin: auto;
  }
`
