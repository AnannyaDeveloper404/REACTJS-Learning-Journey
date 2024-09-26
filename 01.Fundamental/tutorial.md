# React Fundamentals

#### First Component

```js
const Greeting = () => {
  return <h2>My First Component</h2>;
};
```

- starts with capital letter
- must return JSX (html)
- always close tag <Greeting/>

##### Typical Component

```js
// imports or logic

const Greeting = () => {
  return <h2>My First Component</h2>;
};
export default Greeting;
```

##### Root Component (only one)

index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
```

### JSX Rules

- return single element (one parent element)

  - semantics section/article
  - Fragment - let's us group elements without adding extra nodes

```js
return <React.Fragment>...rest of the return</React.Fragment>;

// shorthand

return <>...rest of the return</>;
```

- camelCase property naming convention

```js
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

- className instead of class

```js
return <div className="someValue">hello</div>;
```

- close every element

```js
return <img />;
// or
return <input />;
```

- formatting
  - opening tag in the same line as return or ()

```js
function Greeting() {
  return (
    <>
      <div className="someValue">
        <h3>hello people</h3>
        <ul>
          <li>
            <a href="#">hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world</h2>
      <input type="text" name="" id="" />
    </>
  );
}
```

#### Nest Components

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};
```
