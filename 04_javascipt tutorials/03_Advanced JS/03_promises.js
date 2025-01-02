// Promises in js and promises chaining
// A Promise is a proxy for a value not necessarily known when the promise is created.

/*
In JavaScript, a Promise is an object that represents the eventual 
completion or failure of an asynchronous operation. 
It is a way to handle asynchronous operations in a more structured 
and readable manner than traditional callback functions
*/
const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        if (data) {
          resolve(data);
        } else {
          reject("Failed to fetch data");
        }
      }, 1000);
    });
  };
  
  fetchData()
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Operation completed.");
    });
  
// 

    /*
    States:
    A Promise can be in one of three states:
    1. Pending: The initial state, indicating the operation is in progress.
    2. Fulfilled: The operation completed successfully.
    3. Rejected: The operation failed.

    Methods:
    Promises have methods to handle the different states:
    1. .then(): Attaches a callback function to be executed when the promise is fulfilled.
    2. .catch(): Attaches a callback function to be executed when the promise is rejected.
    3. .finally(): Attaches a callback function that is executed regardless of whether the promise is fulfilled or rejected.

*/
