import React from 'react'

import {Navbar, Header, Pie, Resources} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{height: '80vh'}}>
        <Pie />
      </div>
      <Resources />
      {/* <Routes /> */}
    </div>
  )
}

export default App
