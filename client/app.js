import React from 'react'

import {Navbar, Header, PieContainer, Resources} from './components'
// import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div style={{height: '80vh'}}>
        <PieContainer />
      </div>
      <Resources />
      {/* <Routes /> */}
    </div>
  )
}

export default App
