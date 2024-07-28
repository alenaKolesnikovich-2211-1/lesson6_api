/*
const baseURL = 'https://reqres.in/api';

;(async() => {
  try{
    const response = await fetch(`${baseURL}/users`)    // Promise
    const data = await response.json()  // OR .blob() for file;    OR .text() for text
    console.log(`status == ${response.status}`);  // OR response.headers
    console.log(`data : `, data)
  }catch (error){
    console.error('It is not possible to get a list of users', error);
  }
})()
*/


//const fetch = require('node-fetch');
/*
const url = 'https://reqres.in';
const requestBody = {
  "name": "ElenaKole",
  "job": "writer"
};
let userObj = null;

;(async () => {
  const response = await fetch(`${url}/api/users/1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  console.log('response.status', response.status)

  const data = await response.json()
  console.log('user : ', data);
  const userId = data.id;
  console.log('userId : ', userId)
  userObj = Object.assign({}, data)
  console.log(`userObj : `, userObj)

})()*/

////////////////////////////////
fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 30, // optional, defaults to 60
  })
})
.then(res => res.json())
.then(console.log)

;(async () => {
  // get token
  const responseLogin = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30, // optional, defaults to 60
    })
  })

  const data = await responseLogin.json();
  const token = data.token;
  console.log('token : ', token)
  // Get current authenticated user
  const response2nd = await fetch('https://dummyjson.com/user/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const dataMe = await response2nd.json();
  console.log('dataMe : ', dataMe)
})()
