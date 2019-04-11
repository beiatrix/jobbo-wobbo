import React from 'react'

import {Navbar, Header, Pie} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{height: '80vh'}}>
        <Pie />
      </div>
      {/* <Routes /> */}
    </div>
  )
}

export default App
