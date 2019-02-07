const fruits = [
  { name: 'banana', type: 'fruit' },
  { name: 'potato', type: 'vegetable' },
  { name: 'apple', type: 'fruit' },
  { name: 'carrot', type: 'vegetable' }
];

const filteredItems = fruits.filter(fruit => fruit.type === 'fruit');
filteredItems;
