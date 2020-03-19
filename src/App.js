import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home'
import VolumeConversions from './components/volumeConversions'
import Brix from './components/brix'
import SO2 from './components/so2'
import { offline } from './helpers/calcs.js'
import { Link } from 'react-router-dom'

class App extends Component {
  state = {
    arrs : []
  }

  componentDidMount() {
  offline();
  }
  
  render() {
    return (
      <div className='app'>
      <div className="nav">
      <div className="logo">
        <Link to='/'>
        <span className="is-hidden-tablet">
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-1277.3 888.2 433.4 406">
            <path d="M-180.3-370h182v182h-182zm-996.4 1337.2h-31.1a45 45 0 0 0-45 45V1141h22.8v-128.8c0-12.3 10-22.2 22.2-22.2h19.7v236.3a51.8 51.8 0 0 0 51.7 51.7h184.5a51.8 51.8 0 0 0 51.7-51.7v-202.6l31.3-56.6h-307.8zm30.4 83.7h56.8v22.8h-56.8v-22.8zm0 76.1h56.8v22.8h-56.8V1127zm79.3 60.8h-79.3V1165h79.3v22.8zm0-76.1h-79.3v-22.8h79.3v22.8zm0-76h-79.3v-22.8h79.3v22.8z"/>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-504" y1="1650.4" x2="-1403.8" y2="720.6">
              <stop offset="0" stopColor="#fff" stopOpacity="0"/>
              <stop offset="1" stopColor="#8a6aff"/>
            </linearGradient>
            <path d="M-1176.7 968.4h-31.1a45 45 0 0 0-45 45v128.8h22.8v-128.8c0-12.3 10-22.2 22.2-22.2h19.7v236.3a51.8 51.8 0 0 0 51.7 51.7h184.5a51.8 51.8 0 0 0 51.7-51.7v-202.6l31.3-56.6h-307.8zm30.4 83.7h56.8v22.8h-56.8v-22.8zm0 76.1h56.8v22.8h-56.8v-22.8zm79.3 60.8h-79.3v-22.8h79.3v22.8zm0-76.1h-79.3v-22.8h79.3v22.8zm0-76h-79.3V1014h79.3v22.9z" fill="url(#SVGID_1_)"/>
            <path d="M-2069.6 395.9a9 9 0 0 0-5.1-5.2l-87.8-35.4a60.5 60.5 0 0 0-51.7-53.6l-5.1-58.7a9 9 0 0 0-6.1-7.8 9 9 0 0 0-9.5 2.5l-33.2 36.6-18-63a8.9 8.9 0 0 0-8.3-6.5 9.2 9.2 0 0 0-8.8 5.9l-110.9 305.9a9 9 0 0 0 7.3 12l177 24.4 1.2.1a9 9 0 0 0 9-9l.1-64.3a132.7 132.7 0 0 0 97.4-18.4c21.8-13.8 39.9-34 52.1-58.4a8.4 8.4 0 0 0 .4-7.1zm-137.7-14.7a14.8 14.8 0 1 1 0-29.6 14.8 14.8 0 1 1 0 29.6z"/>
          </svg>
        </span>
          WineCalc</Link>
      </div>
      <ul>
        <li>
          <Link to='/VolumeConversions'>      
            Volume Conversion
          </Link>
        </li>
        <li>
          <Link to='/Brix'>   
            Brix to Alcohol
          </Link>
        </li>
        <li>
          <Link to='/SO2'>
            SO2 Addition
          </Link>
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
        <div id="offline">Offline</div>
    </div>
    )
  }
}

export default App;
