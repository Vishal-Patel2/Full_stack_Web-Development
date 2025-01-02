// asyn-Await in js

function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       resolve ({ name: "chaicode", url: "https://chaicode.com" });
       // resolve ({ name: "chaicode", url: "https://chaicode.com" });
      }, 3000);
    });
  }
  
  async function getUserData() {
    try {
      console.log("Fetching user data...");
      const userData = await fetchUserData();
      console.log("User data fetched successfully");
  
      console.log("User data: ", userData);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }
  getUserData();

  /*In JavaScript, async/await is a syntactic feature that simplifies 
     working with asynchronous operations, specifically promises.

    Here's a breakdown:
    1. Async functions:
    Functions declared with the async keyword always return a promise.
     This means they can be used with .then() and .catch() methods, or with await.
    2. Await keyword:
    Inside an async function, you can use the await keyword before a promise-returning expression. 
    This pauses the function execution until the promise is resolved, and then returns the resolved value

    */
  