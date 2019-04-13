import React from 'react'

import {Navbar, Header, Overview, PieContainer, Resources} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Overview />

      {/*
      overall stats
      - I was a candidate for X companies
      - from DATE to DATE
      - for roles such as software engineer', 'fullstack engineer,' and 'front-end engineer.'

      - I had X introductory/behavioral phone calls
      - X technical remote screens
      - X coding challenges
      - X on-site interviews
      - and received X offers.
      */}

      {/*
      PIE CHART
      These were the methods I used to apply to companies.
      'recruiter contacted me',
      'linkedin - easy apply',
      'hiring day [fullstack]',
      'online apply',
      'angel list',
      'hiring day [womenhack]',
      'internal reference',
      'coding challenge',
      'triplebyte'
      */}

      {/*
      RADAR
      the only methods of application that led to ANY next steps at all (whether a phone call, technical screen, or even on-site) were:
      */}

      {/* ===== THESE TWO BELOW, SIDE BY SIDE? ===== */}
      {/*
      CALENDAR
      this calendar displays my activity over time
      */}

      {/*
      MAP
      this map shows where my on-site interviews were
      */}

      {/*
      INSIGHTS GAINED
      fastest way to propel yourself forward in job search is
      1) by reaching out / getting through to real people - whether at hiring/networking events, or through recruiters reaching out to me. (SEO my linkedin, use buzzwords, change your title) cold applications on linkedin or angel list have an enormously lower turnout / probability of next steps.
      2) triplebyte. i'm not being paid to say this -- triplebyte has been an immensely effective / phenomenal / superpower service for me as a software engineering candidate. upon passing their initial coding quiz, followed by a 2 hour remote technical screen, i matched with dozens of their partnering companies, from which i received/gleaned X% of my phone calls, X% of my on-sites, and ultimately X% of my offers. if the companies were out of state, triplebyte flies you out and covers 100% of the flight, accommodations, and uber transportation between interveiews, at no cost to the candidate. i cannot express enough how grateful i am to have had the opportunity to work with them.
      3) study hard!!!

      out of all the above insights, there is one thread that ties them together, and it's PEOPLE. the best way to move forward in a company's job process is by talking to a real person (not a form on a website). i only discovered triplebyte because of word of mouth. and studying alone got me far, but i only truly rounded out my abilities as an interviewer by practicing communicating my thought processes out loud with a friend - we took turns interviewing algos with each other. this was key. the feedback i got from my interview partner allowed me to locate deficiencies in my communication and recalibrate / improve the clarity of my thoughts.

      it's important to approach the job search with a holistic attitude. do what you need to do to stay healthy and positive. absolutely reach out to your friends (that professional gossip is more important/critical than you know). be resilient and flexible: success is defined by how many times you can hear the word "no," brush it off, and keep moving. studying is important, but take care of yourself too.

      below i've compiled a list of resources that i felt helped prepare me the most efficiently for engineering interviews

      at the risk of being cheesy, but v important (holistic, human being advice): stay positive, check in with your friends/loved ones, and take care of yourself.

      */}

      {/*
      MAYBE NOT THIS
      types of questions asked at on-sites?
      - basic JS
      - hands-on coding
      - whiteboard algo
      - object-oriented design
      - system design
      */}

      <div style={{height: '80vh'}}>
        <PieContainer />
      </div>
      <Resources />
      {/* <Routes /> */}
    </div>
  )
}

export default App
