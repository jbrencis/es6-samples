function makeAjaxRequest(url, method = 'GET') {
  return method;
  // logic to make request
}
makeAjaxRequest('google.com', null) // method = 'GET'
makeAjaxRequest('google.com', 'POST') // method = 'POST'

//=========================
function sum(a = 0, b = 0) {
  if (a === undefined) {
    a = 0; 
  }
  if (b === undefined) {
    b = 0; 
  }
  return a + b;
}
==>
//the samae as above
function sum(a = 0, b = 0) {
  return a + b;
}

//=========================
function addOffset(style={}) {
  if (!style) {
    style = {}; 
  }
  style.offset = '10px';
  return style;
}
==>
//the samae as above
function addOffset(style={}) {
  style.offset = '10px';
  return style;
}