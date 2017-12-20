import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

class VolumeConversions extends Component {

  state = {
  }

  // on searching for books set the state of search
  updateVolume = (volume, id) => {
    this.setState({
        volume: volume
    })
    // if a volume term exists then run function
    if (volume){
      
      var arrs = {
          milliliters:  0.001,
          liters:   1.0,
          hectoliters:  100.0,
          cubicmeters:  1000.0,
          fluidounces:  0.0295735296,
          cups:    0.2365882,
          pints:    0.473176473,
          quarts:   0.946352946,
          tablespoons:  0.0147867648,
          teaspoons:   0.00492892159,
          cubicinches:  0.016387064,
          gallons:   3.78541178,
          bottles: 0.750,
          cases: 6.75,
          barrels: 225.0
          // Ounces
      };

      var hints = {
        a: "750 ml is the common bottle size for most wine.",
        b: "1.5 L is a magnum bottle size, it's quivalent to two standard bottles."
      }
      for (var i in arrs) {
          var offset = arrs[i];
          console.log(id);
          var offsetVal = volume * arrs[id];
          var result = (offsetVal / offset).toFixed(3);
          if (document.getElementById('' + i).value === volume) {
              document.getElementById('' + i).value = (volume);
          } else {
              document.getElementById('' + i).value = (result);
          }
      }
      if (document.getElementById('milliliters').value === 750){
        document.getElementById('notes').innerHTML = hints.a;
        document.getElementById('notes').classList = "visibleHint";
      } else if (document.getElementById('liters').value === 1.5){
        document.getElementById('notes').innerHTML = hints.b;
        document.getElementById('notes').classList = "visibleHint";
      } else {
        document.getElementById('notes').classList = "hints";
      }
      // Fallback error if API call fails         
     } else {
      //volume = 0;
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