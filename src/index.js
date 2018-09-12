module.exports = function solveEquation(equation) {
    // your implementation
    var arr = equation.split(' ');
    var a = +arr[0];
    var b = +(arr[3] + arr[4]);
    var c = +(arr[7] + arr[8]);
    var D = b*b - 4*a*c;
    if(D > 0){
      var x1 = (-b + Math.round(Math.sqrt(D)))/(2*a);
      var x2 = (-b - Math.round(Math.sqrt(D)))/(2*a);
      if(x1 < x2){
        return [x1, x2];
      }
      else{
        return [x2, x1];
      }
    }
    else if(D == 0){
      var x = - (b/(2*a));
      return [x, x];
    }
    else if(D < 0){
      return null;
    }
}
