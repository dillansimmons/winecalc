import React, { Component } from 'react';
import { volumeConv } from '../helpers/calcs.js'
//import { Link } from 'react-router-dom'

class VolumeConversions extends Component {

  state = {
    // volume: 0,
    // pints: 0
  }

  // on searching for books set the state of search
  updateVolume = (volume, id) => {
    this.setState({
        volume: volume
    })
    // console.log(id);
    // if (id === "pints"){
    //   this.setState({
    //     pints: volume
    //   })
    // }
    // if a volume term exists then run function
    if (volume){
      volumeConv(volume, id);       
     }
  }

  render() {
    return (
    <div className="holder">
      <h1 className="title">Volume Conversions</h1>
      <form className="volume">
      <p>
      <label>milliliters</label>
      <input type="number"
              min="0"
              id="milliliters"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>liters</label>
      <input type="number"
              min="0"
              id="liters"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>hectoliters</label>
      <input type="number"
              min="0"
              id="hectoliters"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>cubicmeters</label>
      <input type="number"
              min="0"
              id="cubicmeters"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>fluidounces</label>
      <input type="number"
              min="0"
              id="fluidounces"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>cups</label>
      <input type="number"
              min="0"
              id="cups"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>pints</label>
      <input type="number"
              min="0"
              id="pints"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>quarts</label>
      <input type="number"
              min="0"
              id="quarts"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>tablespoons</label>
      <input type="number"
              min="0"
              id="tablespoons"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>teaspoons</label>
      <input type="number"
              min="0"
              id="teaspoons"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>cubicinches</label>
      <input type="number"
              min="0"
              id="cubicinches"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>gallons</label>
      <input type="number"
              min="0"
              id="gallons"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>bottles <sup>750ml</sup></label>
      <input type="number"
              min="0"
              id="bottles"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>cases <sup>4.5L / 9 bottles</sup></label>
      <input type="number"
              min="0"
              id="cases"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p><p>
      <label>barrels <sup>225L / 59 US gal</sup></label>
      <input type="number"
              min="0"
              id="barrels"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
              </p>
      </form>
      <div className="hints" id="notes"></div>
      <div className="helper"><i className="ion-help-circled"></i></div>
    </div>
    )
  }
}

export default VolumeConversions