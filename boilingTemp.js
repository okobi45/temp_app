function ftoC(ft) {
    var result = ( ft - 32 ) * ( 5 / 9);
    return result;
  }
  
  //This formular will help students to convert fahrenheit  to celcius
   
  
  var boilingTemp = ftoC(212);
  console.log ("The boiling temperature of water in\n celcius is " + boilingTemp + "\u00B0C")