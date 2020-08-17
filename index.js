

var totalM = 10000;

function atmM(x){

  var hud = 50;
  var fif =100;
  if(x<=totalM){
    if(x%50 == 0){
      var estimateH= x/100
      if(estimateH < hud){
        var pointValue =  Math.floor(estimateH)
        var remai =estimateH-pointValue
        var fkkn = remai*100/50
        return "100 ke "+ pointValue + " and 50 ke note : "+ fkkn
      }else{
        var remainm = x-hud*100
        var fiftyn = remainm/50
        return "100 ke note : " + hud +" 50 ke note : "+ fiftyn
      }
    }else{
      console.log('money have multiple of 50 ');
    }
    
  }
  else{
    console.log('atm hve no money');
  }
}

console.log(atmM(100));
console.log(atmM(950));
console.log(atmM(7500));
console.log(atmM(1000));
console.log(atmM(550));