/////The challenge is to answer whether or not the given array////////
/////is a "mountain array". A "mountain array" must have a length/////
/////greater than 2, the value must strictly increase from start /////
/////to a point and then from that point must stictly decrease////////
/////(strictly implies that duplicate values are not valid) //////////
/////(unless they are on opposite sides of the point or "peak")///////

const trueArray = [1, 2, 4, 5, 3, 2, 1];
const falseArray = [1, 3, 5, 4, 6, 2, 1];

////// first attempt /////////////

function disAMountain(array) {
  let answer = true; 
  let peak = array.indexOf(Math.max(...array));
  if (array.length < 3) {
    answer = false;
  }
  for (let i = 0; i < peak; i++) {
      if (array[i] > array[i + 1]) {  
      answer = false;                                          ////failing on arrays that "peak" at the next to last element
    }                                                      
  };
  for (let i = peak; i <= array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      answer = false;
    }
  } return answer;
}


///// second attempt ///////////////

function thisIsAMountainGoodSir(array) {
  let answer = true;
  let peak = array.indexOf(Math.max(...array));
  console.log([peak, array.length])
  if (array.length < 3) {
    return false;
  }
  for (let i = 0; i < peak; i++) {                              //////for integrity sake I'm creating a third attempt after I now
    if (array[i] >= array[i + 1]) {                             //////realize it MUST increase AND decrease to be true
      answer = false;
    }
  }
  for (let i = array.length - 1; i > peak; i--) {
    if (array[i] >= array[i -1]) {
      answer = false;
    }
  } return answer;
}

//////// third attempt ///////////////
function workingMountainFinder(array) {
  let answer = true;
  let peak = array.indexOf(Math.max(...array));
  if (array.length < 3 || peak === array.length - 1 || peak === 0) {
    return false;
  }
  for (let i = 0; i < peak; i++) {
    if (array[i] >= array[i + 1]) {
      answer = false;
    }
  }
  for (let i = array.length - 1; i > peak; i--) {
    if (array[i] >= array[i -1]) {
      answer = false;
    }
  } return answer;
}


console.log(workingMountainFinder(trueArray));  //true
console.log(workingMountainFinder(falseArray));  //false
console.log(workingMountainFinder([3, 5, 5]));  //false
console.log(workingMountainFinder([0,1,2,3,4,5,6,7,8,9]));  //false 
console.log(workingMountainFinder([9,8.7,6,5,4,3,2,1,0]));  //false
