const _ = require('underscore');
function Triangle(array) {
    if (array.length != 3) {
        return false;
    }
    var coordinate1 = parseInt(array[0]);
    var coordinate2 = parseInt(array[1]);
    var coordinate3 = parseInt(array[2]);

    if (((coordinate1 + coordinate2) > coordinate3) && ((coordinate1 + coordinate3) > coordinate2) && ((coordinate2 + coordinate3) > coordinate1)) {
        return true;
    } else {
        return false;
    }
}
function Square(array) {
    if (array.length != 4) {
        return false;
    }

    var coordinate1 = parseInt(array[0]);
    var coordinate2 = parseInt(array[1]);
    var coordinate3 = parseInt(array[2]);
    var coordinate4 = parseInt(array[3]);

    var equal = array.reduce(function(sum, val) {
        return val === array[0];
    });

    return equal;
}
function Rectangle(array) {
    if (array.length != 4) {
        return false;
    }

    var coordinate1 = parseInt(array[0]);
    var coordinate2 = parseInt(array[1]);
    var coordinate3 = parseInt(array[2]);
    var coordinate4 = parseInt(array[3]);

    if (((countValueInArray(array, coordinate1) == 2) && (countValueInArray(array, coordinate2) == 2)) || ((countValueInArray(array, coordinate3) == 2) && (countValueInArray(array, coordinate4) == 2)) || ((countValueInArray(array, coordinate1) == 2) && (countValueInArray(array, coordinate3) == 2)) || ((countValueInArray(array, coordinate1) == 2) && (countValueInArray(array, coordinate4) == 2)) || ((countValueInArray(array, coordinate2) == 2) && (countValueInArray(array, coordinate4) == 2)) || ((countValueInArray(array, coordinate2) == 2) && (countValueInArray(array,coordinate3 == 2)))) {
        return true;
    } else {
        return false;
    } 
    //return false
}


const startingArray = [2, 4, 6, 8, 9, 15]
var resultingArray = ['4', '16', '64']
startingArray.forEach(function(element) {
    //console.log(Math.pow(element, 2));
});
var transform = (startingArray,resultingArray) => {
  const arrObj = {}, arr = [];
  startingArray=startingArray.map(String);
  resultingArray=resultingArray.concat(startingArray);
  for (var j = 0; j < resultingArray.length; j++){
    if(!arrObj[resultingArray[j]]){
      arr[arr.length] = resultingArray[j];
      arrObj[resultingArray[j]] = true;
    }
  }
  resultingArray=arr;
  for(const value of resultingArray) {
    //console.log(value);
  }
  console.log("resultingArray==Question1",resultingArray); 
}

transform(startingArray,resultingArray);



const requests = [
  {requestId: 'poiax',  startedAt: 1489744808, ttl: 8},
{requestId: 'kdfhd',  startedAt: 1489744803, ttl: 3},
{requestId: 'uqwyet', startedAt: 1489744806, ttl: 12}, 
{requestId: 'qewaz',  startedAt: 1489744810, ttl: 1}

]

var cumulativeTtl = 0;
var max = 0;
var min = requests[0].startedAt;

requests.forEach(function(element){
    max = ((element.startedAt + element.ttl) > max) ? (element.startedAt + element.ttl) : max;
    min = (element.startedAt < min) ? element.startedAt : min;    
});
cumulativeTtl = (max - min);

console.log("cumulativeTtl===Question2",cumulativeTtl);

var polygons = [
[3,4,8,5,7]
];
for (let i = 0; i < polygons.length; i++) {
var triangles = [];
var squares = [];
var rectangles = [];
var others = [];
var result = [];
  if (polygons[i].length == 3) {
        result = Triangle(polygons[i]);
        if (result == true) {
            triangles.push(polygons[i]);
        } else {
            others.push(polygons[i]);
        }

    } else if (polygons[i].length == 4) {
        result = Square(polygons[i]);
        if (result == true) {
            squares.push(polygons[i]);
        } else if (checkRectangle(polygons[i]) == true) {
            rectangles.push(polygons[i]);
        } else {
            others.push(polygons[i]);
        }

    }else {
        others.push(polygons[i]);
    }
    result = _.union(triangles,squares,rectangles,others);
    console.log("pol===Quesrion3",result)
}