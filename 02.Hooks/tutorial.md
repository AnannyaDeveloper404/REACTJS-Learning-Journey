# Hooks :Usestate

### Why do we need `Usestate`:

- To update ,manipulate ,change in ReactJS
- add button and increase the value,but doesn't increase
- the reason for bug - we don't trigger re-render

```js
const ErrorExample = () => {
  let count = 0;
  const handleClick = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
```

#### useState properties and syntax

- useState hook
- returns an array with two elements: the current state value, and a function that we can use to update the state
- accepts default value as an argument
- state update triggers re-render

```js
import { useState } from "react";
const UseStateBasics = () => {
  //usestate initialization
  const [count, setCount] = useState(0);
  //useState function
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
```

#### Initial Render and Re-Renders

In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a React component:

- By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

- When the parent element re-renders, even if the component's state or props have not changed.
