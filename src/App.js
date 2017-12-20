import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home'
import VolumeConversions from './components/volumeConversions'
import Brix from './components/brix'
import SO2 from './components/so2'
import './App.css'
import { Link } from 'react-router-dom'

class App extends Component {
  state = {
    arrs : []
  }
  render() {
    return (
      <div className='app'>
      <div className="nav">
      <ul>
        <li>
          <Link to='/'><div className="dot"></div> Home</Link>
        </li>
        <li>
          <Link to='/VolumeConversions'><div className="dot"></div> Volume Conversion</Link>
        </li>
        <li>
          <Link to='/Brix'><div className="dot"></div> Brix to Alcohol</Link>
        </li>
        <li>
          <Link to='/SO2'><div className="dot"></div> SO2 Addition</Link>
        </li>
      </ul>
      </div>

        <Route exact path='/' render={() => (
          <Home />
        )}/>
        
        <Route path='/VolumeConversions' render={({ history }) => (
          <VolumeConversions />
        )}/>

        <Route path='/Brix' render={({ history }) => (
          <Brix />
        )}/>

        <Route path='/SO2' render={({ history }) => (
          <SO2 />
        )}/>
    </div>
    )
  }
}

export default App;
