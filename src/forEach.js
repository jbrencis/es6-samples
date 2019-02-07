const colors = ['red', 'green', 'blue'];
const res = colors.forEach(color => console.log(color));

//==================================

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
function adder(number) {
  sum += number;
}
numbers.forEach(adder);
sum;

//=========================================================

function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

  posts.forEach(post => savePost(post));
}

//=========================================================

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
  areas.push(image.height * image.width);
});
