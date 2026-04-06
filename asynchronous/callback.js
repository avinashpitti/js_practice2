// A callback is a function passed to another function
// to be called when the task is done

function fetchData(callback) {
  setTimeout(() => {           // simulate server delay
    let data = "User Data";
    callback(data);            // call when ready ✅
  }, 2000);
}

fetchData(function(data) {
  console.log(data);           // "User Data" after 2 seconds
});

console.log("This runs first!"); // runs immediately