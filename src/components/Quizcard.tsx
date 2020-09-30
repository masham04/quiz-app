import React, { useState } from "react";
import { proptype } from "../Types/Quiztypes";

export const Quizcard: React.FC<proptype> = ({
  question,
  options,
  callback,
}) => {
  let [selection, setselection] = useState("");
  const selecthandler = (el: any) => {
    setselection(el.target.value);
  };
  return (
    <div className='container'>
      <div className='content'><div><h3>{question}</h3></div>
      <form
        onSubmit={(en: React.FormEvent<EventTarget>) => callback(en, selection)}
      >
        {options.map((opt: string, ind: number) => {
          return (
            <div key={ind}>
              <h4><label>
                <input
                className='dot'
                  type="radio"
                  name="opt"
                  value={opt}
                  required
                  checked={selection === opt}
                  onChange={selecthandler}
                />
                {opt}
              </label></h4>
            </div>
          );
        })}
        <input type="submit" className='btn' />
      </form>
      </div>
    </div>
  );
};
