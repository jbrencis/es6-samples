const numbers = [10, 20, 30];

let sum = 0;

let res = numbers.reduce((sum, number) => {
  return sum + number;
}, 0); //0 - initial value

console.log(res); //60

//-----------------------------------------

const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

const res2 = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(res2);
//-----------------------------------------
function balancedParens(string) {
  return !string.split('').reduce(function(previous, char) {
    //! -> converts to boolean
    if (previous < 0) return previous; // ")(" if like this
    if (char === '(') {
      return ++previous;
    }
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParens(')(');

//-----------------------------------------

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];
var totalDistance = trips.reduce((previous, trip) => {
  return previous + trip.distance;
}, 0);

//-----------------------------------------

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(
  (obj, item) => {
    obj[item.type]++;
    return obj;
  },
  { sitting: 0, standing: 0 }
);

//-----------------------------------------
//create array with unique numbers
const numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
  return array.reduce((newArray, item) => {
    let itemFound = newArray.find(el => el === item);
    if (!itemFound) {
      newArray.push(item);
    }
    return newArray;
  }, []);
}

unique(numbers);

//-----------------------the same as above
function unique(array) {
  return array.reduce((newArray, item) => {
    if (!newArray.find(element => element === item)) newArray.push(item);
    return newArray;
  }, []);
}
