import React from 'react'
// import '../styles/Header.css'
import {getMetric} from '../utils'

export const Overview = props => {
  const {data} = props

  return (
    <section>
      <p>I applied to roles such as Software Engineer,</p>
      <p>Fullstack Engineer, and Frontend Engineer</p>
      <p>from February 11, 2019 to April 13, 2019.</p>

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
    </section>
  )
}
