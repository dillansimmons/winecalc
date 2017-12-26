// If online show green dot, if offline show red : Done
// Icons offline? : Done
// Open screen, dogs and calculations? 
// Business calculations?
// Other calculations????

// show offline in bottom right if not connected to internet
export function offline(){
  if(navigator.onLine) {
   console.log('offline');
   document.getElementById('offline').style.opacity = "0";
  } else {
   document.getElementById('offline').style.opacity = "1";
  }
}

// Calculation for volume conversions
export function volumeConv(volume, id){
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
      // Ounces ?
  };
  for (var i in arrs) {
    var offset = arrs[i];
    var offsetVal = volume * arrs[id];
    var result = (offsetVal / offset).toFixed(3);
    if (document.getElementById('' + i).value === volume) {
        document.getElementById('' + i).value = (volume);
    } else {
        document.getElementById('' + i).value = (result);
    }
  }
}

// volume conversion show hints based on inputs : UNFINISHED
export function hints(){
  var hints = {
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

// // Basic Liquid volume conversions
// var VolumeConversions = function () {
//     var current = "";
    
//     var arr = {
//         milliliters:  0.001,
//         liters:   1.0,
//         hectoliters:  100.0,
//         cubicmeters:  1000.0,
//         fluidounces:  0.0295735296,
//         cups:    0.2365882,
//         pints:    0.473176473,
//         quarts:   0.946352946,
//         tablespoons:  0.0147867648,
//         teaspoons:   0.00492892159,
//         cubicinches:  0.016387064,
//         gallons:   3.78541178
//     };
    
//     var calc = function() {
//         if (current == '') {
//             return;
//         }
//         var initVal = this.val();
//         var offsetVal = initVal * arr[current];
//         for (var i in arr) {
//             var offset = arr[i];
//             var result = (offsetVal / offset).toFixed(3);
//             if (result == 0 ) { result = "" }
//             if (i != current) {
//                 // Not sure on this piece of code
//                 document.getElementById('' + i).val(result);
//             }
//         }
//     };

//     var input = document.querySelector('input.inp');
    
//     input.bind("focus", function(e) {
//         // clean up
//         input.val("");
        
//         current = this.attr('id');
//     });
    
//     input.bind("keyup", calc);
// };



// // S02
// var LiquidSolution = function () {
//     var calc = function () {
//        var volume = document.getElementById('so2liquidd_1').val();
//        var rate = document.getElementById('so2liquidd_2').val();
//        var concentration = document.getElementById('so2liquidd_3').val();

//        var volumec = document.getElementById('so2liquidd_c1').val();
//        var ratec = document.getElementById('so2liquidd_c2').val();
//        var sumc = document.getElementById('so2liquidd_c3').val();

//        var r = (((volume * volumec) / ratec) * ((rate / concentration) * 100)) / sumc;

//        document.getElementById('so2liquidd_4').val(r ? r.toFixed(2) : 'n/a');
//     };
    
//     var a = $("#so2liquidd_1, #so2liquidd_2, #so2liquidd_3");
//     var a = document.getElementById('so2liquidd_4, so2liquidd_2, so2liquidd_3');
    
//     a.bind("focus", function () {
//         if (parseInt(this.val()) === 0) {
//             this.val("");
//         }
//         calc();
//     });
    
    
//     a.bind("keyup", calc);
    
//     a.bind("change", calc);
    
//     $("#so2liquidd_c1, #so2liquidd_c2, #so2liquidd_c3").bind("change", function(){
//         calc();
//     });
    
// };



// // Bix / Alchohal conversions
// var BrixAlcoholConversion = function () {
//     var calc = function () {
//         //alert(2);
//        var r1 = document.getElementById('brixd_4').val();
//        var r2 = document.getElementById('brixd_5').val();
//        var r = r1 * r2;
//        document.getElementById('brixd_6').val(isNaN(r) || r === 0 ? '0.00' : (r).toFixed(2));
//     };
    
//     //alert (1);
//     $("#brixd_4").bind("focus", function(){
//         if (this.val() == 0) {
//             this.val("");
//         }
        
//         calc();
//     });
    
//     $("#brixd_5").bind("focus", function(){
//         if (this.val() == 0) {
//             this.val("");
//         }
        
//         calc();
//     });
    
//     $("#brixd_4, #brixd_5").bind("keyup", function(){
//         calc();
//     });
    
    
// };



// // Chaptalization is the process of adding sugar to grape juice or must before fermentation, which will boost the alcohol level in the finished wines. This process is practiced in cool weather regions, where under ripeness are a problem and the sugar level of the grapes is too low to rich the desired alcohol level. Control of chaptalization is fairly strict in many countries. The legality of chaptalization process varies by country, region, forms of sugar and even wine type. After sugar is added to the grape juice or must, naturally-occurring enzymes convert the sucrose molecules in sugar into glucose and fructose, which are then fermented by the yeast and producing alcohol and carbon dioxide.
// var Chaptalization = function () {
//     var calc = function () {
//        var A3 = document.getElementById('chaptalization_1').val();
//        var B3 = document.getElementById('chaptalization_c1').val();
//        var D3 = document.getElementById('chaptalization_2').val();
//        var E3 = document.getElementById('chaptalization_3').val();
//        var F3 = document.getElementById('chaptalization_4').val();
//        var r  = (A3 * B3 * (E3-D3)/(F3-E3) ) / (document.getElementById('chaptalization_c2').val());
//        var out = r ? r.toFixed(2) : 'n/a';
//        document.getElementById('chaptalization_5').val(out);
//     };
    
//     var a = $("#chaptalization_1, #chaptalization_2, #chaptalization_3, #chaptalization_4");
    
//     a.bind("focus", function () {
//         if (parseInt(this.val()) == 0) {
//             this.val("");
//         }
//         calc();
//     });
    
    
//     a.bind("keyup", calc);
    
//     a.bind("change", calc);
    
//     $("#chaptalization_c1, #chaptalization_c2").bind("change", function(){
//         calc();
//     });
    
// };



// //acid addition
// var AcidAddition = function () {
//     var calc = function () {
//        var r = 0;
//        var a = parseFloat(document.getElementById('acidd_1').val());
//        var b = parseFloat(document.getElementById('acidd_c1').val());
//        var c = parseFloat(document.getElementById('acidd_2').val());
//        var d = parseFloat(document.getElementById('acidd_c2').val());
//        var e = parseFloat(document.getElementById('acidd_c3').val());
       
//        r = ((a * b * c) / d) / e;

//        document.getElementById('acidd_3').val(isNaN(r) ? '0.00' : r.toFixed(2));
//     };
    
//     var a = $("#acidd_1, #acidd_2");
    
//     a.bind("focus", function () {
//         if (parseInt(this.val()) === 0) {
//             this.val("");
//         }
//         calc();
//     });
    
    
//     a.bind("keyup", calc);
    
//     a.bind("change", calc);
    
//     $("#acidd_c1, #acidd_c2, #acidd_c3").bind("change", function(){
//         calc();
//     });
    
// };



// // Fining is important part of the winemaking process where a fining agent is added to the wine to create an absorbent, enzymatic or ionic bond with the suspended particles, making them a larger molecule that can precipitate out of the wine easier and quicker. Fining agents is used to reduce astringency and remove tannins, microscopic particles and clarifying the grape juice or wines, they also take out some aroma and flavor. The fining agents can be organic and inorganic or mixtures of both. Some work electrochemically, with the agent having a positive charge attracting negatively charged particles and bind with them.
// var Fining = function () {
//     var calc = function () {
        
//        var volume = parseFloat(document.getElementById('finingd_1').val());
//        var rate = parseFloat(document.getElementById('finingd_2').val());

//        var volumec = parseFloat(document.getElementById('finingd_c1').val());
//        var ratec = parseFloat(document.getElementById('finingd_c2').val());
//        var sumc = parseFloat(document.getElementById('finingd_c3').val());
//        var r = 0;

//        if (ratec === 0.12) {
//        r = ((volume * volumec) * (rate * ratec)) / sumc;
//        }
//        else {
//         r = ((volume * volumec) * (rate / ratec)) / sumc;
//        }

//        document.getElementById('finingd_3').val(r ? r.toFixed(2) : 'n/a');
//     };
    
//     var a = $("#finingd_1, #finingd_2");
    
//     a.bind("focus", function () {
//         if (parseInt(this.val()) === 0) {
//             this.val("");
//         }
//         calc();
//     });
    
    
//     a.bind("keyup", calc);
    
//     a.bind("change", calc);
    
//     $("#finingd_c1, #finingd_c2, #finingd_c3").bind("change", function(){
//         calc();
//     });
    
// };



// // Fortification is process that involves addition of grape spirits to still wine to increase the total percent of alcohol level. This procedure is important part of making a sweet and fortified wines like Port, Madeira and Marsala, where the grape spirits is added into the wine before fermentation is finished, leaving a high percentage of residual sugar. The timing and volume of the grape spirit is critical to achieve the final desired alcoholic strength and sugar concentration. Fortification can be used also to find the perfect tasting spot after dealcoholization of the wine.
// var Fortification = function () {
//     var calc = function () {
//        var volume = document.getElementById('fortificationd_1').val();
//        var init_alchohol = document.getElementById('fortificationd_2').val() / 100;
//        var actual_alchohol = document.getElementById('fortificationd_3').val() / 100;
//        var target_alchohol = document.getElementById('fortificationd_4').val() / 100;


//        var volumec = document.getElementById('fortificationd_c1').val();
//        var sumc = document.getElementById('fortificationd_c2').val();

//        var tmp4 = volume * volumec * (target_alchohol - actual_alchohol) / (init_alchohol - target_alchohol);
//        var r = tmp4 / sumc;

//        document.getElementById('fortificationd_5').val(r ? r.toFixed(2) : 'n/a');
//     };
    
//     var a = $("#fortificationd_1, #fortificationd_2, #fortificationd_3, #fortificationd_4");
    
//     a.bind("focus", function () {
//         if (parseInt(this.val()) == 0) {
//             this.val("");
//         }
//         calc();
//     });
    
    
//     a.bind("keyup", calc);
    
//     a.bind("change", calc);
    
//     $("#fortificationd_c1, #fortificationd_c2").bind("change", function(){
//         calc();
//     });
    
// };



// //Blending (MAY NOT NEED)
// var ExpandedBlendingCalculator = function () {
//     var names = function() {
//         document.getElementById('varietal_v1, #b11, #appellation_v1, #vintage_v1').text(document.getElementById('v1').val());
//         document.getElementById('varietal_v2, #c11, #appellation_v2, #vintage_v2').text(document.getElementById('v2').val());
//         document.getElementById('varietal_v3, #d11, #appellation_v3, #vintage_v3').text(document.getElementById('v3').val());
//         document.getElementById('varietal_v4, #e11, #appellation_v4, #vintage_v4').text(document.getElementById('v4').val());
//         document.getElementById('varietal_v5, #f11, #appellation_v5, #vintage_v5').text(document.getElementById('v5').val());
//         document.getElementById('varietal_v6, #g11, #appellation_v6, #vintage_v6').text(document.getElementById('v6').val());
//   };
    
//     var calc = function () {
//     var wrap = document.getElementById('wine-blending-calculator');
//         //components/////////////////////////////////////////////////////////////
//         //b-1
//         var B2 = parseFloat(document.getElementById('b2').val());
//         var B3 = parseFloat(document.getElementById('b3').val());
//         var B4 = parseFloat(document.getElementById('b4').val());
//         var B5 = parseFloat(document.getElementById('b5').val());
//         var B6 = parseFloat(document.getElementById('b6').val());
//         var B7 = parseFloat(document.getElementById('b7').val());
//         var B8 = B2 + B3 + B4 + B5 + B6 + B7;
//         var B9 = B8;
//         document.getElementById('b9').val(isNaN(B9) ? 'n/a' : B9.toFixed(2));
        
//         document.getElementById('c2').val(((B2 / B8) * 100).toFixed(2));
//         document.getElementById('c3').val(((B3 / B8) * 100).toFixed(2));
//         document.getElementById('c4').val(((B4 / B8) * 100).toFixed(2));
//         document.getElementById('c5').val(((B5 / B8) * 100).toFixed(2));
//         document.getElementById('c6').val(((B6 / B8) * 100).toFixed(2));
//         document.getElementById('c7').val(((B7 / B8) * 100).toFixed(2));
        
//         var C2 = parseFloat(document.getElementById('c2').val());
//         var C3 = parseFloat(document.getElementById('c3').val());
//         var C4 = parseFloat(document.getElementById('c4').val());
//         var C5 = parseFloat(document.getElementById('c5').val());
//         var C6 = parseFloat(document.getElementById('c6').val());
//         var C7 = parseFloat(document.getElementById('c7').val());
//         var C8 = (B2 * C2) + (B3 * C3) + (B4 * C4) + (B5 * C5) + (B6 * C6) + (B7 * C7);
//         var C9 = (B9 / B9) * 100;
//         document.getElementById('c9').val(isNaN(C9) ? 'n/a' : C9.toFixed(2));
        
//         //
//         var D2 = parseFloat(document.getElementById('d2', wrap).val());
//         var H2 = Math.pow(10, -D2) * B2;
  
//   var D3 = parseFloat(document.getElementById('d3', wrap).val());
//   var H3 = Math.pow(10, -D3) * B3;
        
//   var D4 = parseFloat(document.getElementById('d4', wrap).val());
//   var H4 = Math.pow(10, -D4) * B4;
        
//   var D5 = parseFloat(document.getElementById('d5', wrap).val());
//   var H5 = Math.pow(10, -D5) * B5;
        
//   var D6 = parseFloat(document.getElementById('d6', wrap).val());
//   var H6 = Math.pow(10, -D6) * B6;
        
//   var D7 = parseFloat(document.getElementById('d7', wrap).val());
//   var H7 = Math.pow(10, -D7) * B7;
        
//   var H8 = H2 + H3 + H4 + H5 + H6 + H7;
//         var D8 = H8 / B9 * 10000;
  
//   var D9 = -(Math.log(D8 * Math.pow(10, -4)) / Math.log(10));
  
//   document.getElementById('d9', wrap).val(isNaN(D9) ? 'n/a' : D9.toFixed(2));

//         var E2 = parseFloat(document.getElementById('e2').val());
//         var E3 = parseFloat(document.getElementById('e3').val());
//         var E4 = parseFloat(document.getElementById('e4').val());
//         var E5 = parseFloat(document.getElementById('e5').val());
//         var E6 = parseFloat(document.getElementById('e6').val());
//         var E7 = parseFloat(document.getElementById('e7').val());
//         var E8 = (B2 * E2) + (B3 * E3) + (B4 * E4) + (B5 * E5) + (B6 * E6) + (B7 * E7);
//         var E9 = E8 / B9;
//         document.getElementById('e9').val(isNaN(E9) ? 'n/a' : E9.toFixed(2)); 
        
//         //F
//         var F2 = parseFloat(document.getElementById('f2').val());
//         var F3 = parseFloat(document.getElementById('f3').val());
//         var F4 = parseFloat(document.getElementById('f4').val());
//         var F5 = parseFloat(document.getElementById('f5').val());
//         var F6 = parseFloat(document.getElementById('f6').val());
//         var F7 = parseFloat(document.getElementById('f7').val());
//         var F8 = (B2 * F2) + (B3 * F3) + (B4 * F4) + (B5 * F5) + (B6 * F6) + (B7 * F7);
//         var F9 = F8 / B8;
//         document.getElementById('f9').val(isNaN(F9) ? 'n/a' : F9.toFixed(2));
        
//         //g
//         var G2 = parseFloat(document.getElementById('g2').val());
//         var G3 = parseFloat(document.getElementById('g3').val());
//         var G4 = parseFloat(document.getElementById('g4').val());
//         var G5 = parseFloat(document.getElementById('g5').val());
//         var G6 = parseFloat(document.getElementById('g6').val());
//         var G7 = parseFloat(document.getElementById('g7').val());
//         var G8 = (B2 * G2) + (B3 * G3) + (B4 * G4) + (B5 * G5) + (B6 * G6) + (B7 * G7);
//         var G9 = G8 / B9;
        
//         var G9 = isNaN(G9) ? 'n/a' : G9.toFixed(2);
//         document.getElementById('g9').val(G9);
        
//         //varietal///////////////////////////////////////////////////////////////////
//         //b-2
//         var B12 = parseFloat(document.getElementById('b12').val());
//         var B13 = parseFloat(document.getElementById('b13').val());
//         var B14 = parseFloat(document.getElementById('b14').val());
//         var B15 = parseFloat(document.getElementById('b15').val());
//         var B16 = parseFloat(document.getElementById('b16').val());
//         var B17 = parseFloat(document.getElementById('b17').val());
//         var B18 = (B17 * C7) + (B16 * C6) + (B15 * C5) + (B14 * C4) + (B13 * C3) + (B12 * C2);
//         var B19 = B18 / C9;
//         document.getElementById('b19').val(isNaN(B19) ? 'n/a' : B19.toFixed(2));
        
//         //c-2
//         var C12 = parseFloat(document.getElementById('c12').val());
//         var C13 = parseFloat(document.getElementById('c13').val());
//         var C14 = parseFloat(document.getElementById('c14').val());
//         var C15 = parseFloat(document.getElementById('c15').val());
//         var C16 = parseFloat(document.getElementById('c16').val());
//         var C17 = parseFloat(document.getElementById('c17').val());
//         var C18 = (C17 * C7) + (C16 * C6) + (C15 * C5) + (C14 * C4) + (C13 * C3) + (C12 * C2);
//         var C19 = C18 / C9;
//         document.getElementById('c19').val(isNaN(C19) ? 'n/a' : C19.toFixed(2));
        
//         //d-2
//         var D12 = parseFloat(document.getElementById('d12').val());
//         var D13 = parseFloat(document.getElementById('d13').val());
//         var D14 = parseFloat(document.getElementById('d14').val());
//         var D15 = parseFloat(document.getElementById('d15').val());
//         var D16 = parseFloat(document.getElementById('d16').val());
//         var D17 = parseFloat(document.getElementById('d17').val());
//         var D18 = (D17 * C7) + (D16 * C6) + (D15 * C5) + (D14 * C4) + (D13 * C3) + (D12 * C2);
//         var D19 = D18 / C9;
//         document.getElementById('d19').val(isNaN(D19) ? 'n/a' : D19.toFixed(2));
        
//         //e-2
//         var E12 = parseFloat(document.getElementById('e12').val());
//         var E13 = parseFloat(document.getElementById('e13').val());
//         var E14 = parseFloat(document.getElementById('e14').val());
//         var E15 = parseFloat(document.getElementById('e15').val());
//         var E16 = parseFloat(document.getElementById('e16').val());
//         var E17 = parseFloat(document.getElementById('e17').val());
//         var E18 = (E17 * C7) + (E16 * C6) + (E15 * C5) + (E14 * C4) + (E13 * C3) + (E12 * C2);
//         var E19 = E18 / C9;
//         document.getElementById('e19').val(isNaN(E19) ? 'n/a' : E19.toFixed(2));
        
//         //f-2
//         var F12 = parseFloat(document.getElementById('f12').val());
//         var F13 = parseFloat(document.getElementById('f13').val());
//         var F14 = parseFloat(document.getElementById('f14').val());
//         var F15 = parseFloat(document.getElementById('f15').val());
//         var F16 = parseFloat(document.getElementById('f16').val());
//         var F17 = parseFloat(document.getElementById('f17').val());
//         var F18 = (F17 * C7) + (F16 * C6) + (F15 * C5) + (F14 * C4) + (F13 * C3) + (F12 * C2);
//         var F19 = F18 / C9;
//         document.getElementById('f19').val(isNaN(F19) ? 'n/a' : F19.toFixed(2));
        
//         //g-2
//         var G12 = parseFloat(document.getElementById('g12').val());
//         var G13 = parseFloat(document.getElementById('g13').val());
//         var G14 = parseFloat(document.getElementById('g14').val());
//         var G15 = parseFloat(document.getElementById('g15').val());
//         var G16 = parseFloat(document.getElementById('g16').val());
//         var G17 = parseFloat(document.getElementById('g17').val());
//         var G18 = (G17 * C7) + (G16 * C6) + (G15 * C5) + (G14 * C4) + (G13 * C3) + (G12 * C2);
//         var G19 = G18 / C9;
//         document.getElementById('g19').val(isNaN(G19) ? 'n/a' : G19.toFixed(2));
        
//         //appelation/////////////////////////////////////////////////////////////////
//         //b-3
//         var B22 = parseFloat(document.getElementById('b22').val());
//         var B23 = parseFloat(document.getElementById('b23').val());
//         var B24 = parseFloat(document.getElementById('b24').val());
//         var B25 = parseFloat(document.getElementById('b25').val());
//         var B26 = parseFloat(document.getElementById('b26').val());
//         var B27 = parseFloat(document.getElementById('b27').val());
//         var B28 = (B27 * C7) + (B26 * C6) + (B25 * C5) + (B24 * C4) + (B23 * C3) + (B22 * C2);
//         var B29 = B28 / C9;
//         document.getElementById('b29').val(isNaN(B29) ? 'n/a' : B29.toFixed(2));
        
//         //c-3
//         var C22 = parseFloat(document.getElementById('c22').val());
//         var C23 = parseFloat(document.getElementById('c23').val());
//         var C24 = parseFloat(document.getElementById('c24').val());
//         var C25 = parseFloat(document.getElementById('c25').val());
//         var C26 = parseFloat(document.getElementById('c26').val());
//         var C27 = parseFloat(document.getElementById('c27').val());
//         var C28 = (C27 * C7) + (C26 * C6) + (C25 * C5) + (C24 * C4) + (C23 * C3) + (C22 * C2);
//         var C29 = C28 / C9;
//         document.getElementById('c29').val(isNaN(C29) ? 'n/a' : C29.toFixed(2)); 
        
//         // d-3
//         var D22 = parseFloat(document.getElementById('d22').val());
//         var D23 = parseFloat(document.getElementById('d23').val());
//         var D24 = parseFloat(document.getElementById('d24').val());
//         var D25 = parseFloat(document.getElementById('d25').val());
//         var D26 = parseFloat(document.getElementById('d26').val());
//         var D27 = parseFloat(document.getElementById('d27').val());
//         var D28 = (D27 * C7) + (D26 * C6) + (D25 * C5) + (D24 * C4) + (D23 * C3) + (D22 * C2);
//         var D29 = D28 / C9;
//         document.getElementById('d29').val(isNaN(D29) ? 'n/a' : D29.toFixed(2));
        
//         //e-2
//         var E22 = parseFloat(document.getElementById('e22').val());
//         var E23 = parseFloat(document.getElementById('e23').val());
//         var E24 = parseFloat(document.getElementById('e24').val());
//         var E25 = parseFloat(document.getElementById('e25').val());
//         var E26 = parseFloat(document.getElementById('e26').val());
//         var E27 = parseFloat(document.getElementById('e27').val());
//         var E28 = (E27 * C7) + (E26 * C6) + (E25 * C5) + (E24 * C4) + (E23 * C3) + (E22 * C2);
//         var E29 = E28 / C9;
//         document.getElementById('e29').val(isNaN(E29) ? 'n/a' : E29.toFixed(2));
        
//         //f-3
//         var F22 = parseFloat(document.getElementById('f22').val());
//         var F23 = parseFloat(document.getElementById('f23').val());
//         var F24 = parseFloat(document.getElementById('f24').val());
//         var F25 = parseFloat(document.getElementById('f25').val());
//         var F26 = parseFloat(document.getElementById('f26').val());
//         var F27 = parseFloat(document.getElementById('f27').val());
//         var F28 = (F27 * C7) + (F26 * C6) + (F25 * C5) + (F24 * C4) + (F23 * C3) + (F22 * C2);
//         var F29 = F28 / C9;
//         document.getElementById('f29').val(isNaN(F29) ? 'n/a' : F29.toFixed(2));
        
//         //g-3
//         var G22 = parseFloat(document.getElementById('g22').val());
//         var G23 = parseFloat(document.getElementById('g23').val());
//         var G24 = parseFloat(document.getElementById('g24').val());
//         var G25 = parseFloat(document.getElementById('g25').val());
//         var G26 = parseFloat(document.getElementById('g26').val());
//         var G27 = parseFloat(document.getElementById('g27').val());
//         var G28 = (G27 * C7) + (G26 * C6) + (G25 * C5) + (G24 * C4) + (G23 * C3) + (G22 * C2);
//         var G29 = G28 / C9;
//         document.getElementById('g29').val(isNaN(G29) ? 'n/a' : G29.toFixed(2));
        
//         //vintage////////////////////////////////////////////////////////////////////////////////
//         //b-4
//         var B32 = parseFloat(document.getElementById('b32').val());
//         var B33 = parseFloat(document.getElementById('b33').val());
//         var B34 = parseFloat(document.getElementById('b34').val());
//         var B35 = parseFloat(document.getElementById('b35').val());
//         var B36 = parseFloat(document.getElementById('b36').val());
//         var B37 = parseFloat(document.getElementById('b37').val());
//         var B38 = (B37 * C7) + (B36 * C6) + (B35 * C5) + (B34 * C4) + (B33 * C3) + (B32 * C2);
//         var B39 = B38 / C9;
//         document.getElementById('b39').val(isNaN(B39) ? 'n/a' : B39.toFixed(2));
        
//         //c-4
//         var C32 = parseFloat(document.getElementById('c32').val());
//         var C33 = parseFloat(document.getElementById('c33').val());
//         var C34 = parseFloat(document.getElementById('c34').val());
//         var C35 = parseFloat(document.getElementById('c35').val());
//         var C36 = parseFloat(document.getElementById('c36').val());
//         var C37 = parseFloat(document.getElementById('c37').val());
//         var C38 = (C37 * C7) + (C36 * C6) + (C35 * C5) + (C34 * C4) + (C33 * C3) + (C32 * C2);
//         var C39 = C38 / C9;
//         document.getElementById('c39').val(isNaN(C39) ? 'n/a' : C39.toFixed(2));
        
//         //d-4
//         var D32 = parseFloat(document.getElementById('d32').val());
//         var D33 = parseFloat(document.getElementById('d33').val());
//         var D34 = parseFloat(document.getElementById('d34').val());
//         var D35 = parseFloat(document.getElementById('d35').val());
//         var D36 = parseFloat(document.getElementById('d36').val());
//         var D37 = parseFloat(document.getElementById('d37').val());
//         var D38 = (D37 * C7) + (D36 * C6) + (D35 * C5) + (D34 * C4) + (D33 * C3) + (D32 * C2);
//         var D39 = D38 / C9;
//         document.getElementById('d39').val(isNaN(D39) ? 'n/a' : D39.toFixed(2));
        
//         //e-4
//         var E32 = parseFloat(document.getElementById('e32').val());
//         var E33 = parseFloat(document.getElementById('e33').val());
//         var E34 = parseFloat(document.getElementById('e34').val());
//         var E35 = parseFloat(document.getElementById('e35').val());
//         var E36 = parseFloat(document.getElementById('e36').val());
//         var E37 = parseFloat(document.getElementById('e37').val());

//         var E38 = (E37 * C7) + (E36 * C6) + (E35 * C5) + (E34 * C4) + (E33 * C3) + (E32 * C2);
//         var E39 = E38 / C9;
//         document.getElementById('e39').val(isNaN(E39) ? 'n/a' : E39.toFixed(2));
        
//         //f-4
//         var F32 = parseFloat(document.getElementById('f32').val());
//         var F33 = parseFloat(document.getElementById('f33').val());
//         var F34 = parseFloat(document.getElementById('f34').val());
//         var F35 = parseFloat(document.getElementById('f35').val());
//         var F36 = parseFloat(document.getElementById('f36').val());
//         var F37 = parseFloat(document.getElementById('f37').val());
//         var F38 = (F37 * C7) + (F36 * C6) + (F35 * C5) + (F34 * C4) + (F33 * C3) + (F32 * C2);
//         var F39 = F38 / C9;
//         document.getElementById('f39').val(isNaN(F39) ? 'n/a' : F39.toFixed(2));
        
//         //g-4
//         var G32 = parseFloat(document.getElementById('g32').val());
//         var G33 = parseFloat(document.getElementById('g33').val());
//         var G34 = parseFloat(document.getElementById('g34').val());
//         var G35 = parseFloat(document.getElementById('g35').val());
//         var G36 = parseFloat(document.getElementById('g36').val());
//         var G37 = parseFloat(document.getElementById('g37').val());
//         var G38 = (G37 * C7) + (G36 * C6) + (G35 * C5) + (G34 * C4) + (G33 * C3) + (G32 * C2);
//         var G39 = G38 / C9;
//         document.getElementById('g39').val(isNaN(G39) ? 'n/a' : G39.toFixed(2));
//     };

//     var a = $("#v1, #v2, #v3, #v4, #v5, #v6");
//     a.bind("keyup", names);
//     a.bind("change", names);
    
//     var calc = document.querySelector('.calc');

//     calc.bind("keyup", calc);
//     calc.bind("change", calc);
    
//     var test = function() {
//         // vol
//         document.getElementById('b2').val(100);
//         document.getElementById('b3').val(50);
        
//         // pH
//         document.getElementById('d2').val(6);
//         document.getElementById('d3').val(5);
        
//         // ppm
//         document.getElementById('e2').val(6);
//         document.getElementById('e3').val(5);
        
//         // alcohol
//         document.getElementById('f2').val(40);
//         document.getElementById('f3').val(50);
        
//         // acidy
//         document.getElementById('g2').val(4);
//         document.getElementById('g3').val(6);
        
//         document.getElementById('b12').val(100);
        
//         calc.trigger('change');
//     };

//     // test();
    
// };

