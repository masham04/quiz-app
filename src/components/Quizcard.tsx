import React, { useState, useEffect } from "react";
import { proptype } from "../Types/Quiztypes";

export const Quizcard: React.FC<proptype> = ({
  question,
  options,
  callback,
}) => {
  let [selection, setselection] = useState("");

  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(1);

  const marks = localStorage.getItem("marks");

  const selecthandler = (el: any) => {
    setselection(el.target.value);
  };
  if (seconds === 0) {
    seconds = 59;
    setSeconds(seconds);
    minutes--;
    setMinutes(minutes);
  }
  useEffect(() => {
    if (minutes > -1) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      console.log(seconds);
    } else {
      console.log("Timeout");
    }
  }, [seconds, minutes]);

  return (
    <div className="container">
      {seconds === 59 && minutes < 0 ? (
        <div style={{ textAlign: "center" }}>
          <h1>TimeOver!</h1>
          <h2> Your have scored {marks} out of 5</h2>
        </div>
      ) : (
        <div className="content">
          <div style={{ float: "initial", textAlign: "center" }}>
            <h2>Time Remaining</h2>
            <h1>
              <span>{minutes > 9 ? minutes : `0${minutes}`}</span>:
              <span>{seconds > 9 ? seconds : `0${seconds}`}</span>
            </h1>
          </div>
          <div>
            <h3>➜ {question}</h3>
          </div>
          <form
            onSubmit={(en: React.FormEvent<EventTarget>) =>
              callback(en, selection)
            }
          >
            {options.map((opt: string, ind: number) => {
              return (
                <div key={ind}>
                  <h4>
                    <label>
                      <input
                        className="dot"
                        type="radio"
                        name="opt"
                        value={opt}
                        required
                        checked={selection === opt}
                        onChange={selecthandler}
                      />
                      &nbsp;&nbsp;
                      {opt}
                    </label>
                  </h4>
                </div>
              );
            })}
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
