module.exports = function solveEquation(equation) {
  // your implementation
  var mas = new Array();
  var mas2 = new Array();
  var re =/\-?\s\d+/g
  var re2 = /-?\d+/g
  mas = equation.match(re2); 
  mas2 = (equation.match(re)); 
  var a = mas[0];
  var b = mas2[0].replace(/\s/g, '');
  var c = mas2[1].replace(/\s/g, '');
    var D = b * b - 4 * a * c;
    var mas3 = new Array();
    if (D > 0) {
      var x1, x2;
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      x2 = (-b - Math.sqrt(D)) / (2 * a);
      if (x1<x2){
     mas3.push(Math.round(x1));
     mas3.push(Math.round(x2));
     return mas3;
      }
      if (x1>x2){
        mas3.push(Math.round(x2));
        mas3.push(Math.round(x1));
        return mas3;
         }
  }
}
