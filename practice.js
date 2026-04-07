// ✅ Clean, promise-based
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => response.json())   // parse JSON
//   .then(user => console.log(user.name))
//   .catch(error => console.log("Error:", error));

  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => {
    console.log(response.status);     // 200
    console.log(response.ok);         // true (status 200-299)
    console.log(response.statusText); // "OK"
    console.log(response.url);        // request URL
    return response.json();           // parse body as JSON ✅
  })
  .then(data => console.log(data));