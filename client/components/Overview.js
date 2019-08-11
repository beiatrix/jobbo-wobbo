import React from 'react'
import styled from 'styled-components'
import { getMetric } from '../utils'

export const Overview = props => {
  const {data} = props
  const behavioralScreens = getMetric(data, 'behavioralScreen')
  const technicalScreens = getMetric(data, 'technicalScreen')
  const codingChallenges = getMetric(data, 'codingChallenge')
  const onsites = getMetric(data, 'onsite')
  const offers = getMetric(data, 'offer')

  return (
    <StyledOverview>
      <p>I applied to roles with the titles <span>Software Engineer</span>, <span>Fullstack Engineer</span>, and <span>Frontend Engineer</span>.</p>
      <br />
      <p>My job search began on <span>February 11, 2019</span> and ended on <span>May 13, 2019</span>, my first day as a software engineer.</p>
      <br />
      <p>Out of <span>{data.length}</span> companies, I received <span>{behavioralScreens}</span> initial phone calls, 
      <span>{technicalScreens + codingChallenges}</span>{' '} remote coding challenges + technical screens, <span>{onsites}</span> on-site interviews and <span>{offers}</span> offers.</p>
    </StyledOverview>
  )
}

const StyledOverview = styled.section`
  height: 30vh;
  margin-bottom: 2rem;
`