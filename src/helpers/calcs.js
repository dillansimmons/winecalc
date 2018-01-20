// If online show green dot, if offline show red : Done
// Icons offline? : Done
// Open screen, dogs and calculations? 
// Business calculations?
// Other calculations????

// show offline in bottom right if not connected to internet
export function offline(){
  if(navigator.onLine) {
   document.getElementById('offline').style.opacity = "0";
  } else {
   document.getElementById('offline').style.opacity = "1";
  }
}

// Calculation for volume conversions
export function volumeConv(volume, id){
  const arrs = {
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
      // Ounces ?
  };
  for (let i in arrs) {
    let offset = arrs[i];
    let offsetVal = volume * arrs[id];
    let result = (offsetVal / offset).toFixed(3);
    if (document.getElementById('' + i).value === volume) {
        document.getElementById('' + i).value = (volume);
    } else {
        document.getElementById('' + i).value = (result);
    }
  }
}

// volume conversion show hints based on inputs : UNFINISHED
export function hints(){
  let hints = {
    a: "750 ml is the common bottle size for most wine.",
    b: "1.5 L is a magnum bottle size, it's quivalent to two standard bottles."
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
}

// Brix calculation
export function brix(){
  let r1 = document.getElementById('brix').value,
  r2 = document.getElementById('alcCon').value,
  r4 = 261.3 / (261.3 - r1),
  r5 = r1 * r4 * 10,
  r = r1 * r2;
  document.getElementById('futureAlc').value = (r).toFixed(2);
  document.getElementById('grav').value = (r4).toFixed(4);
  document.getElementById('sugar').value = (r5).toFixed(2);
}  

export function so2(){
  let volumea = document.getElementById('so2liquidd_1').value,
  rate = document.getElementById('so2liquidd_2').value,
  concentration = document.getElementById('so2liquidd_3').value,
  volumec = document.getElementById('so2liquidd_c1').value,
  ratec = document.getElementById('so2liquidd_c2').value,
  sumc = document.getElementById('so2liquidd_c3').value,
  r = (((volumea * volumec) / ratec) * ((rate / concentration) * 100)) / sumc;
  document.getElementById('so2liquidd_4').value = (r ? r.toFixed(2) : 0);
}