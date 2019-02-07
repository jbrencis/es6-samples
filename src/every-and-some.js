const names = ['Alexander', 'Mathew', 'Joe'];

const res = names.every(el => el.length > 4);

console.log(res); //returns false, true - only if all names are > 4

const res2 = names.some(el => el.length > 4);

console.log(res2); //true, if at least 1 is longer than 4

//-----------------------------------------------
function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
};
const username = new Field('2cool');
const password = new Field('password');
const birthsday = new Field('10/10/2010');

const fields = [username, password, birthsday];
const res = fields.every(el => el.validate());
console.log(res); //true
