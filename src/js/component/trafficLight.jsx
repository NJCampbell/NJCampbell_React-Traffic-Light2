import React, { useState } from "react";

const TrafficLight = () => {
  const [chosenColor, setChosenColor] = useState("");

  return (
    <>
      <div className="traffic-light-stem"></div>
      <div className="traffic-light-body">
        <div
          className={chosenColor === "red" ? "red-light selected" : "red-light"}
          onClick={() => setChosenColor("red")}
        ></div>

        <div
          className={
            chosenColor === "yellow" ? "yellow-light selected" : "yellow-light"
          }
          onClick={() => setChosenColor("yellow")}
        ></div>
        <div
          className={
            chosenColor === "green" ? "green-light selected" : "green-light"
          }
          onClick={() => setChosenColor("green")}
        ></div>
      </div>
    </>
  );
};

export default TrafficLight;
