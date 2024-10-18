import { useState, useReducer } from "react";
import { data } from "../../../data";
const defaultState = {
  people: data,
};
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./action";

const ReducerBasics = () => {
  const [state, disPatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    disPatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearList = () => {
    disPatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    disPatch({ type: RESET_LIST });
  };
  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
