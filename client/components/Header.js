import React from 'react'
import '../styles/Header.css'

export const Header = props => {
  return (
    <header>
      <div id="background-image" />
      {/* <h1>hello there</h1> */}
      <div id="text">
        <h1>jobbo wobbo</h1>
        <h2>
          my name is beiatrix. i'm a software developer and visual designer.
          this is a datavis of my job search in 2019.
        </h2>
      </div>
      {/* <p>i applied to 99 jobs</p>
      <p>
        in roles such as 'software engineer', 'fullstack engineer,' and
        'front-end engineer'
      </p>
      <p>from [date] to [date]</p>
      <p>
        via 9 different methods (i.e. hiring day events, linkedin, angellist,
        internal referrals, etc.).
      </p>
      <p>out of 99 applications,</p>
      <p>i did x behavioral phone screens</p>
      <p>x technical remote screens</p>
      <p>x coding challenges</p>
      <p>x on-site interviews</p>
      <p>and received x offers.</p>
      <p>this is my journey.</p> */}
    </header>
  )
}
