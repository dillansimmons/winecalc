import React, { Component } from 'react';
import { so2 } from '../helpers/calcs.js'
//import { Link } from 'react-router-dom'

class SO2 extends Component {

  state = {}

  // on searching for books set the state of search
  updateVolume = (volume, id) => {
    this.setState({
      volume: volume
    })
    // if a volume term exists then run function
    if (volume) {
      so2();    
    }
  }

  render() {
    return (
    <div className="holder">
      <h1 className="title">Sulfite Addition</h1>
        <div id="input-fields">

          <form method="get" action="/" className="wine-calc so2">

            <div className="form-group">
                <label htmlFor="so2liquidd_1">Volume of wine, must, juice</label>
                <div className="w-select">
                <input type="number" step="any" id="so2liquidd_1" className="inp form-control"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)} />
                <select id="so2liquidd_c1" className="inp form-control">
                    <option value="3.7854">Gallons ▾</option>
                    <option value="1">liters ▾</option>
                    <option value="100">hL ▾</option>
                    <option value="4.546">UK Gallons ▾</option>
                </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="so2liquidd_2">SO<sub>2</sub> rate addition</label>
                <div className="w-select">
                <input type="number" step="any" id="so2liquidd_2" className="inp form-control"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)} />
                <select id="so2liquidd_c2" className="inp form-control">
                    <option value="1000">ppm ▾</option>
                    <option value="1000">mg/L ▾</option>
                    <option value="1">g/L ▾</option>
                    <option value="100">g/hL ▾</option>
                    <option value="0.1">g/100ml ▾</option>
                </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="so2liquidd_3">Concentration of Liquid SO<sub>2</sub> solution <sup>%w/v</sup></label>
                  <input type="number" step="any" id="so2liquidd_3" className="inp form-control"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)} />
              </div>

          </form>

        </div>

        <div id="amount" className="results-field">
          <h3>Volume of Liquid SO<sub>2</sub> solution to add</h3>
          {/*<div id="amount-holder"></div>*/}
            <div className="w-select">
                <input type="number" step="any" id="so2liquidd_4" className="inp form-control wb-calc-output"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)} />
                <select id="so2liquidd_c3" className="inp form-control">
                    <option value="1">mL ▾</option>
                    <option value="1000">liters ▾</option>
                    <option value="3785.40">Gallons ▾</option>
                    <option value="4546">UK Gallons ▾</option>
                </select>
            </div>
        </div>

      <div className="hints" id="notes">Alcohol conversion factor can be between 0.55 - 0.65</div>
      <div className="helper"><i className="ion-help-circled"></i></div>
    </div>
    )
  }
}

export default SO2