### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Managing asynchronous code is important when for handling tasks that take some time to complete such as network requests, interacting with files, etc. 

- What is a Promise?
An object representing an eventual completion or failure of an asynchronous operation. A way to handle asynchronous code in a better way than callbacks. 

- What are the differences between an async function and a regular function?
Async functions return promises, which is either a completion or failure of an async operation. They often involve awaits, which pauses the execution of the function until a promise is fulfilled or failed.

- What is the difference between Node.js and Express.js?
Node.js is a runtime environment that allows you to run javascript code on the server-side. Express.js is a web application framework, like Flask for Python.

- What is the error-first callback pattern?
Where the return value and/or callback function is the last to be returned. The idea is that errors are handled first and explicitly returned if they occur before getting to the point of the function. 

- What is middleware?
Functions that exist in between an application's request and response cycle. They're functions that can access a req/res objects and can call the next function. Express.json() is an example of middleware, as it can take in a req or res object and parse the data into a jsonable object. 

- What does the `next` function do?
It's a callback function passed to middleware functions in express apps. It's purpose is to pass control to the next middleware function in the stack, sequentially. If you don't call next, the control won't be passes to the next middleware function or route handler. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
No error handling. The requests are sequential. If one request takes a long time, the following requests will also be delayed. Promise.all can be used to handle all three requests if that's the goal, however, if one request fails, they all will. Jquery is also being used, which is a bit outdated.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
