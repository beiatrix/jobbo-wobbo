import React from 'react'
import styled from 'styled-components'

export const Insights = props => {
  return (
    <StyledInsights>
      <p>
      What insights have I gained from this experience? The most effective ways to propel yourself forward in the job search are:
      </p>
      <ol>
        <li>
          By reaching out & getting through to real people - whether at hiring/networking events, or through recruiters reaching out to me. While it helps to finesse your LinkedIn SEO and have a strong online presence, cold applications on places like LinkedIn, AngelList, Indeed or Glassdoor have a significantly lower probability of leading to next steps. Also, lots of open positions are not actually even posted online on job boards. You have to get through to real people.
        </li>
        <li>
          Triplebyte. I'm not being paid to say this -- Triplebyte has been an immensely effective service for me as a software engineering candidate. Upon passing their initial coding quiz, followed by a 2-hour remote technical screen, I matched with dozens of their partnering companies, from which I received/gleaned [_]% of my phone screens, [_]% of my on-sites, and ultimately [_]% of my offers. If any on-sites invitations happened to be out-of-state, Triplebyte covered 100% of the flight, accommodations, and Uber transportation between interveiews, at no cost to the candidate. I cannot express enough how grateful i am to have had the opportunity to work with them.
        </li>
        <li>
          STUDY. Shouldn't need to be said, but you can't pass whiteboarding interviews if you don't practice. Know your data structures and algos. Literally get a whiteboard and practice the physical act of writing code by hand and talking through your thought processes out loud. Do not practice leetcode problems on your computer. Get a whiteboard.
        </li>
      </ol>
      <p>
        Out of all the above insights, there is one thread that ties them together, and it's PEOPLE. The best way to move forward in a company's job process is by talking to a real person (not a form on a website). I only discovered triplebyte because of word of mouth. Studying alone got me far enough, but I only truly rounded out my abilities as an interviewee by praticing algos with a friend -- taking turns as interviewer and interviewee -- to get used to externalizing my thoughts. This was key. The feedback I got from my interview partner allowed me to locate deficiencies in my communication and improve the clarity of my reasoning.
      </p>
      <p>
        It's important to approach the job search with a holistic attitude. Do what you need to do to stay healthy and positive. Absolutely reach out to your friends (that professional tea is more critical than you know). Be resilient and flexible: success is defined by how many times you can hear the word "no," brush it off, and keep moving. Studying is important, but take care of yourself too.
      </p>
      <p>
        Below I've compiled a list of resources that I felt helped prepare me the most efficiently for engineering interviews.
      </p>
      <ul>
        <li>Algoexpert</li>
        <li>Udemy: Data Structures and Algorithms Masterclass</li>
        <li>Udemy: Advanced Web Developer Bootcamp</li>
        <li>Cracking the Coding Interview</li>
        <li>Pramp - practice interviews with friends!</li>
      </ul>
      <p>
        I hope this was enlightening or at the very least entertaining to look at. For those of you who are looking for an engineering gig right now, don't give up, and try to have fun with in the process! Coding is cool. Meeting people is cool. Visiting different offices is cool, and if you're lucky, you might get to travel to new cities and see some new places along the way. Every step you're taking is carrying you towards that next great opportunity. Carving out your career path is truly an adventure, so enjoy the journey!
      </p>
      <p>  
        Happy hunting!
      </p>
      <p>
        - Beiatrix 
        [SOCIALS]
        [website]
        [github]
        [omg add this to beiatrix.github.io too]
      </p>
    </StyledInsights>
  )
}

const StyledInsights = styled.section`
  width: 50vw;
  margin: auto;

  p {
    margin-bottom: 1rem;
  }
`