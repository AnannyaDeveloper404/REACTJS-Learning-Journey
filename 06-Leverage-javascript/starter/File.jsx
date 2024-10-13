import React from "react";
const { people } = require("../../../data");
// import React from "react";
export function File({}) {
  return (
    <div>
      {people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </div>
  );
}
