# **`useEffect` hooks**

useEffect is a hook in React that allows you to perform side effects in function components.There is no need for urban dictionary - basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

```js
import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  // useEffect(() => {
  //   console.log('hello from useEffect');
  // });

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
```

#### Multiple Effects

```js
import Starter from "./tutorial/02-useEffect/starter/03-multiple-effects.jsx";
```

```js
import { useState, useEffect } from "react";

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from first useEffect");
  }, [value]);

  useEffect(() => {
    console.log("hello from second useEffect");
  }, [secondValue]);
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
```

- The first useEffect will be triggered whenever the 1st button is clicked
- The second useEffect will be triggered whenever the 2nd button is clicked

```js
import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  // while fetching data
  // convention with boolean values "isSomething"
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  // can return entire app
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>My App</h2>;
};
export default MultipleReturnsBasics;
```

#### Fetch Errors "Gotcha" (optional)

```js
import Starter from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data.jsx";
```

Unlike for example Axios, by default, the fetch() API does not consider HTTP status codes in the 4xx or 5xx range to be errors. Instead, it considers these status codes to be indicative of a successful request,

```js
try {
const resp = await fetch(url);
// console.log(resp);
if (!resp.ok) {
  setIsError(true);
  setIsLoading(false);
  return;
}

const user = await resp.json();
setUser(user);

}

```

#### DON'T CALL HOOKS CONDITIONALLY

```js
import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  if (condition) {
    // won't work
    const [state, setState] = useState(false);
  }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // this will also fail
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <h2>example</h2>;
};

export default Example;
```

#### Short Circuit Evaluation

Vanilla JS

In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.

The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".

For example:

```js
const x = 0;
const y = 1;

console.log(x && y); // Output: 0 (the first operand is falsy, so it is returned)
console.log(y && x); // Output: 0 (the second operand is falsy, so it is returned)
```

The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".

For example:

```js
const x = 0;
const y = 1;

console.log(x || y); // Output: 1 (the first operand is falsy, so the second operand is returned)
console.log(y || x); // Output: 1 (the first operand is truthy, so it is returned)
```

```js
import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  // can't use if statements
  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && (
        <div>
          <h2> whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};
const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className="btn">log out</button>
    </div>
  );
};
export default ShortCircuitEvaluation;
```
