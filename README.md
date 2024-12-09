# React useState Asynchronous Update Bug

This repository demonstrates a common issue in React applications involving the asynchronous nature of state updates using `useState`.  The problem arises when attempting to access the updated state value immediately after calling `setCount`. Because `setCount` is asynchronous, the value of `count` in the console log will not reflect the increment.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a solution using functional updates or effects to ensure the correct behavior.