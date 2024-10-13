import React from "react";
const { people } = require("../../../data");

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </div>
  );
};

export default List;
