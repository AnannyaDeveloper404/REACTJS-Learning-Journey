import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setperson] = React.useState(data);
  const removeItem = (id) => {
    // console.log(id);
    const newpeople = people.filter((person) => person.id !== id);
    setperson(newpeople);
  };
  const clearItems = () => {
    setperson([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={clearItems}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
