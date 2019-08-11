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
        <Overview data={jobbos} />
        <PieContainer data={jobbos} />
        <BarContainer />
        <RadarContainer />
        <CalContainer />

        {/*
      MAP
      And this map shows where my on-site interviews were located.
      */}
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
    overflow: visible;
  }

  .text {
    width: 50vw;
    margin: auto;
  }
`
