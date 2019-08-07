import React from 'react'
import styled from 'styled-components'
import { getMetric } from '../utils'

export const Overview = props => {
  const {data} = props

  return (
    <StyledOverview>
      <p>I applied to roles with the titles <span>Software Engineer</span>, Fullstack Engineer, and Frontend Engineer from February 11, 2019 to April 13, 2019.</p>

      <p>Out of {data.length} companies</p>
      <p>
        I received {getMetric(data, 'behavioralScreen')} initial phone calls
      </p>
      <p>
        {getMetric(data, 'technicalScreen') +
          getMetric(data, 'codingChallenge')}{' '}
        remote coding challenges or technical screens
      </p>
      <p>{getMetric(data, 'onsite')} on-site interviews</p>
      <p>and {getMetric(data, 'offer')} offers.</p>
    </StyledOverview>
  )
}

const StyledOverview = styled.section`
  span {
    font-size: 1.5rem;
    color: var(--highlight);
  }
`