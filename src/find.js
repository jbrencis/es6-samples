
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(el => el.admin === true); 
//output
[object Object] {
admin: true,
id: 3
}
