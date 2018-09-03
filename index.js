// Code your solution in this file!

function distanceFromHqInBlocks(e){
 var a=e-42;
 if (e<42){
   a=42-e;
 }
 return a
 
}
function distanceFromHqInFeet(a){
   var b=a-42;
 if (a<42){
   b=42-a;
 }
   var result=b*264;
   return result
 }
 function distanceTravelledInFeet(A,B){
   var Blocks=(A>B)?A-B:B-A;
   return Blocks*264
 }
function calculatesFarePrice(A,B){
  var Blocks=(A>B)?A-B:B-A;
  var feet=Blocks*264
  if (feet<=264){
    return 0
  }
  else if (feet>400 && feet<2000) {
    return 2.56
  }
  else if(feet>2000&& feet<2500){
    return 25
  }
  else return 'cannot travel that far'
}
 