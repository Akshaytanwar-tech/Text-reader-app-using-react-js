import React, { useState } from "react";

export default function Textarea() {
  const [text, settext] = useState("This is the value of set text");
  const [mode, setmode] = useState("Enable dark mode");
  const [mymode, setmymode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const CovertUppercase = () => {
    const result = text.toUpperCase();
    settext(result);
  };
  const ConcertLowercase = () => {
    const result = text.toLowerCase();
    settext(result);
  };
  const Cleartext = () => {
    settext("");
  };
  const RemoveSpace = () => {
    const result = text.trim();
    settext(result);
  };
  const Handleonchange = (event) => {
    settext(event.target.value);
  };
  const darkMode = () => {
    if (mymode.color === "white") {
      setmymode({
        color: "black",
        backgroundColor: "white",
      });
      setmode("Enable Dark Mode");
    } else {
      setmymode({
        color: "white",
        backgroundColor: "black",
      });
      setmode("Disable Dark mode");
    }
  };

  return (
    <div style={mymode}>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={darkMode}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          {mode}
        </label>
      </div>
      <div className={"mb-3 m-5"}>
        <label
          for="exampleFormControlTextarea1"
          className="form-label display-4"
        >
          Write Something Here
        </label>
        <textarea
          className="form-control mt-3"
          id="exampleFormControlTextarea1"
          rows="3"
          style={{ height: "200px" }}
          value={text}
          onChange={Handleonchange}
        ></textarea>

        <button
          type="button"
          class="btn btn-outline-primary btn-lg m-3"
          onClick={CovertUppercase}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg m-3"
          onClick={ConcertLowercase}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          class="btn btn-outline-success btn-lg m-3"
          onClick={Cleartext}
        >
          Clear Text
        </button>
        <button
          type="button"
          class="btn btn-outline-danger btn-lg m-3"
          onClick={RemoveSpace}
        >
          Remove Spaces
        </button>
      </div>
      <div className="container mx-5">
        <p>
          No. of Words :- {text.split(" ").length} <br></br>No. of character :-{" "}
          {text.length}
        </p>
      </div>
    </div>
  );
}
