const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data received");
      } else {
        reject("Error occurred");
      }
    }, 3000);
  });
};

// Using Promises
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));