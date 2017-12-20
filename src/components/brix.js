import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

class Brix extends Component {

  state = {
  }

  // on searching for books set the state of search
  updateVolume = (volume, id) => {
    this.setState({
        volume: volume
    })
    // if a volume term exists then run function
    if (volume){
        //alert(2);
       var r1 = document.getElementById('brix').value,
       r2 = document.getElementById('alcCon').value,
       r4 = 261.3 / (261.3 - r1),
       r5 = r1 * r4 * 10,
       r = r1 * r2;
       document.getElementById('futureAlc').value = (r).toFixed(2);
       document.getElementById('grav').value = (r4).toFixed(4);
       document.getElementById('sugar').value = (r5).toFixed(2);
      // Fallback error if API call fails         
     } else {
      //volume = 0;
    }      
  }

  render() {
    return (
    <div className="holder">
      <h1 className="title">brix - alcohol conversion</h1>
      <form className="brix">
      <p>
        <label>Actual Brix of must, juice <sup>&deg;Bx</sup></label>
        <input type="number"
              min="0"
              id="brix"
              placeholder="0"
              className="inp"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
      </p>
      <p>
        <label>Alcohol conversion factor</label>
        <input type="number"
                min="0.55"
                max="0.65"
                id="alcCon"
                placeholder="0.55-0.65"
                step="0.01"
                className="inp"
                onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
      </p>
      <p>
        <label>Specific Gravity of must, juice <sup>SG</sup></label>
        <input type="number"
              min="0"
              id="grav"
              placeholder="0"
              className="invalid"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
      </p>
      <p>
        <label>Sugar content of must, juice <sup>g/L</sup></label>
        <input type="number"
              min="0"
              id="sugar"
              placeholder="0"
              className="invalid"
              onChange={(event) => this.updateVolume(event.target.value, event.target.id)}/>
      </p>
      <p>
        <label>Future alcohol level of the wine</label>
        <input type="number"
                min="0"
                id="futureAlc"
                placeholder="0"
                className="invalid results"
                disabled />
      </p>
      </form>
      <div className="hints" id="notes">Alcohol conversion factor can be between 0.55 - 0.65</div>
      <div className="helper"><i className="ion-help-circled"></i></div>
    </div>
    )
  }
}

export default Brix