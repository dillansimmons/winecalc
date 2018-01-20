import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './components/home'
import VolumeConversions from './components/volumeConversions'
import Brix from './components/brix'
import SO2 from './components/so2'
import './App.css'
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
        <Link to='/'>Wine Calc</Link>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-1277.3 888.2 433.4 406">
            <path d="M-180.3-370h182v182h-182zm-996.4 1337.2h-31.1a45 45 0 0 0-45 45V1141h22.8v-128.8c0-12.3 10-22.2 22.2-22.2h19.7v236.3a51.8 51.8 0 0 0 51.7 51.7h184.5a51.8 51.8 0 0 0 51.7-51.7v-202.6l31.3-56.6h-307.8zm30.4 83.7h56.8v22.8h-56.8v-22.8zm0 76.1h56.8v22.8h-56.8V1127zm79.3 60.8h-79.3V1165h79.3v22.8zm0-76.1h-79.3v-22.8h79.3v22.8zm0-76h-79.3v-22.8h79.3v22.8z"/>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-504" y1="1650.4" x2="-1403.8" y2="720.6">
              <stop offset="0" stopColor="#fff" stopOpacity="0"/>
              <stop offset="1" stopColor="#8a6aff"/>
            </linearGradient>
            <path d="M-1176.7 968.4h-31.1a45 45 0 0 0-45 45v128.8h22.8v-128.8c0-12.3 10-22.2 22.2-22.2h19.7v236.3a51.8 51.8 0 0 0 51.7 51.7h184.5a51.8 51.8 0 0 0 51.7-51.7v-202.6l31.3-56.6h-307.8zm30.4 83.7h56.8v22.8h-56.8v-22.8zm0 76.1h56.8v22.8h-56.8v-22.8zm79.3 60.8h-79.3v-22.8h79.3v22.8zm0-76.1h-79.3v-22.8h79.3v22.8zm0-76h-79.3V1014h79.3v22.9z" fill="url(#SVGID_1_)"/>
            <path d="M-2069.6 395.9a9 9 0 0 0-5.1-5.2l-87.8-35.4a60.5 60.5 0 0 0-51.7-53.6l-5.1-58.7a9 9 0 0 0-6.1-7.8 9 9 0 0 0-9.5 2.5l-33.2 36.6-18-63a8.9 8.9 0 0 0-8.3-6.5 9.2 9.2 0 0 0-8.8 5.9l-110.9 305.9a9 9 0 0 0 7.3 12l177 24.4 1.2.1a9 9 0 0 0 9-9l.1-64.3a132.7 132.7 0 0 0 97.4-18.4c21.8-13.8 39.9-34 52.1-58.4a8.4 8.4 0 0 0 .4-7.1zm-137.7-14.7a14.8 14.8 0 1 1 0-29.6 14.8 14.8 0 1 1 0 29.6z"/>
          </svg>
      </div>
      <ul>
{/*        <li>
          <Link to='/'>
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-1572.2 4 359 375.6">
              <path d="M-1213.2 216.1l-63.4-63.4v-95h-42.2v52.8l-63.4-63.4-169 169v10.6h42.2v105.6h105.6v-63.4h42.2v63.4h105.6V226.7h42.2v-10.6z"/>
              <linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="-1551.2" y1="188.3" x2="-1213.2" y2="188.3">
                <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                <stop offset="1" stopColor="#8a6aff"/>
              </linearGradient>
              <path d="M-1213.2 214.7l-63.4-63.4v-95h-42.2v52.8l-63.4-63.4-169 169v10.6h42.2v105.6h105.6v-63.4h42.2v63.4h105.6V225.3h42.2v-10.6z" fill="url(#SVGID_15_)"/>
            </svg>      
            Home
          </Link>
        </li>*/}
        <li>
          <Link to='/VolumeConversions'>
            {/*<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-1277.3 888.2 433.4 406">
              <path d="M-180.3-370h182v182h-182zm-996.4 1337.2h-31.1a45 45 0 0 0-45 45V1141h22.8v-128.8c0-12.3 10-22.2 22.2-22.2h19.7v236.3a51.8 51.8 0 0 0 51.7 51.7h184.5a51.8 51.8 0 0 0 51.7-51.7v-202.6l31.3-56.6h-307.8zm30.4 83.7h56.8v22.8h-56.8v-22.8zm0 76.1h56.8v22.8h-56.8V1127zm79.3 60.8h-79.3V1165h79.3v22.8zm0-76.1h-79.3v-22.8h79.3v22.8zm0-76h-79.3v-22.8h79.3v22.8z"/>
              <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-504" y1="1650.4" x2="-1403.8" y2="720.6">
                <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                <stop offset="1" stopColor="#8a6aff"/>
              </linearGradient>
              <path d="M-1176.7 968.4h-31.1a45 45 0 0 0-45 45v128.8h22.8v-128.8c0-12.3 10-22.2 22.2-22.2h19.7v236.3a51.8 51.8 0 0 0 51.7 51.7h184.5a51.8 51.8 0 0 0 51.7-51.7v-202.6l31.3-56.6h-307.8zm30.4 83.7h56.8v22.8h-56.8v-22.8zm0 76.1h56.8v22.8h-56.8v-22.8zm79.3 60.8h-79.3v-22.8h79.3v22.8zm0-76.1h-79.3v-22.8h79.3v22.8zm0-76h-79.3V1014h79.3v22.9z" fill="url(#SVGID_1_)"/>
              <path d="M-2069.6 395.9a9 9 0 0 0-5.1-5.2l-87.8-35.4a60.5 60.5 0 0 0-51.7-53.6l-5.1-58.7a9 9 0 0 0-6.1-7.8 9 9 0 0 0-9.5 2.5l-33.2 36.6-18-63a8.9 8.9 0 0 0-8.3-6.5 9.2 9.2 0 0 0-8.8 5.9l-110.9 305.9a9 9 0 0 0 7.3 12l177 24.4 1.2.1a9 9 0 0 0 9-9l.1-64.3a132.7 132.7 0 0 0 97.4-18.4c21.8-13.8 39.9-34 52.1-58.4a8.4 8.4 0 0 0 .4-7.1zm-137.7-14.7a14.8 14.8 0 1 1 0-29.6 14.8 14.8 0 1 1 0 29.6z"/>
            </svg>*/}       
            Volume Conversion
          </Link>
        </li>
        <li>
          <Link to='/Brix'>
            {/*<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-1146.5 12 302.6 337">
              <path d="M-892.9 112L-928 76.9l-12.8 12.8a56.7 56.7 0 0 0-63.6 11.4l-10.7 10.7 65.9 65.9-98.2 98.2-65.9-65.9-23.9 23.9a31.7 31.7 0 0 0 0 44.9l42.4 42.4a31.6 31.6 0 0 0 44.8 0l132.8-132.8a56.7 56.7 0 0 0 11.4-63.6l12.9-12.8z"/>
              <path d="M-1027.2 123.9l-74.1 74.1 53.8 53.8 74.1-74.1-53.8-53.8zm-22.6 103.5l-27.1-27.1 12-12 27.1 27.1-12 12zm20-20l-27.1-27.1 12-12 27.1 27.1-12 12zm-7.1-47.1l12-12 27.1 27.1-12 12-27.1-27.1z"/>
              <linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="-1146.5" y1="179.3" x2="-843.9" y2="179.3">
                <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                <stop offset="1" stopColor="#8a6aff"/>
              </linearGradient>
              <path d="M-843.9 63.1L-879 28l-61.8 61.8a56.7 56.7 0 0 0-63.6 11.4l-10.7 10.7 65.9 65.9-98.2 98.2-65.9-65.9-23.9 23.9a31.7 31.7 0 0 0 0 44.9l42.4 42.4a31.6 31.6 0 0 0 44.8 0l132.8-132.8a56.7 56.7 0 0 0 11.4-63.6l61.9-61.8z" fill="url(#SVGID_13_)"/>
              <linearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="-1101.3" y1="188" x2="-973.3" y2="188">
                <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                <stop offset="1" stopColor="#8a6aff"/>
              </linearGradient>
              <path d="M-1027.2 124l-74.1 74.1 53.8 53.8 74.1-74.1-53.8-53.8zm-22.6 103.5l-27.1-27.1 12-12 27.1 27.1-12 12zm20-20l-27.1-27.1 12-12 27.1 27.1-12 12zm-7.1-47.1l12-12 27.1 27.1-12 12-27.1-27.1z" fill="url(#SVGID_14_)"/>
            </svg>*/}    
            Brix to Alcohol
          </Link>
        </li>
        <li>
          <Link to='/SO2'>
            {/*<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="874 33.8 290.2 348.6">
              <path d="M1147.8 299L1072 158.9V75.4c0-7.9-6.6-14.1-14.4-14.1h-77.3c-7.9 0-14.3 6.3-14.3 14.1v83.5L890.1 299a34.6 34.6 0 0 0 30.3 51h196.9a34.6 34.6 0 0 0 30.5-51zm-116.3-58.6a12.3 12.3 0 1 1 0 24.6 12.3 12.3 0 0 1 0-24.6zm-34.6-73.9a12.3 12.3 0 1 1 0 24.6 12.3 12.3 0 0 1 0-24.6zm0 42.9a19.9 19.9 0 1 1 0 39.8 19.9 19.9 0 0 1 0-39.8zm114.4 102.1a14 14 0 0 1-12.3 6.9H938.9c-5 0-9.7-2.6-12.3-6.9a14.2 14.2 0 0 1-.2-14.1l19.3-34.6c2.7-4.9 8.2-7.8 13.8-7.2 25.6 2.4 54.3 24.3 80 23.3a87 87 0 0 0 38.7-12.2 14.2 14.2 0 0 1 19.3 5.5l14 25.2c2.4 4.5 2.4 9.8-.2 14.1z"/>
              <linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="886.2" y1="205.6" x2="1152.2" y2="205.6">
                <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                <stop offset="1" stopColor="#8a6aff"/>
              </linearGradient>
              <path d="M1148 299l-75.8-140.2V75.4c0-7.9-6.6-14.1-14.4-14.1h-77.3c-7.9 0-14.3 6.3-14.3 14.1v83.5L890.4 299a34.6 34.6 0 0 0 30.3 51h196.9a34.6 34.6 0 0 0 30.4-51zm-116.3-58.6a12.3 12.3 0 1 1 0 24.6 12.3 12.3 0 0 1 0-24.6zm-34.6-73.9a12.3 12.3 0 1 1 0 24.6 12.3 12.3 0 0 1 0-24.6zm0 42.9a19.9 19.9 0 1 1 0 39.8 19.9 19.9 0 0 1 0-39.8zm114.4 102.1a14 14 0 0 1-12.3 6.9H939.1c-5 0-9.7-2.6-12.3-6.9a14.2 14.2 0 0 1-.2-14.1l19.3-34.6c2.7-4.9 8.2-7.8 13.8-7.2 25.6 2.4 54.3 24.3 80 23.3a87 87 0 0 0 38.7-12.2 14.2 14.2 0 0 1 19.3 5.5l14 25.2c2.4 4.5 2.4 9.8-.2 14.1z" fill="url(#SVGID_12_)"/>
            </svg> */}
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
