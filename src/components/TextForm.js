import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared Text", "info");
  };

  const handleOnChange = (event) => setText(event.target.value);

  const handleCopy = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Extra spaces removed!", "info");
  };

  const textColor = props.mode === "dark" ? "white" : "black";
  const backgroundColor = props.mode === "dark" ? "#121212" : "white";
  const borderColor = props.mode === "dark" ? "white" : "black";

  return (
    <>
      <div className="container my-4">
        <h1 style={{ color: textColor }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            ref={textAreaRef}
            value={text}
            className="form-control"
            id="myBook"
            placeholder={props.placeholder}
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              border: `1px solid ${borderColor}`,
            }}
            aria-label="Text area for input"
          ></textarea>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <button
            className={`btn btn-${props.mode === "dark" ? "light" : "primary"}`}
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            Uppercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "light" : "secondary"
            }`}
            onClick={handleLoClick}
            disabled={text.length === 0}
          >
            Lowercase
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "light" : "secondary"
            }`}
            onClick={handleClearClick}
            disabled={text.length === 0}
          >
            Clear
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "light" : "secondary"
            }`}
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy
          </button>
          <button
            className={`btn btn-${
              props.mode === "dark" ? "light" : "secondary"
            }`}
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-4">
        <h2 style={{ color: textColor }}>Your Text Summary</h2>
        <p style={{ color: textColor }}>
          <strong>
            {text.trim().length > 0 ? text.split(/\s+/).length : 0}
          </strong>{" "}
          words and <strong>{text.length}</strong> characters
        </p>
        <p style={{ color: textColor }}>
          <strong>Approx. Reading Time:</strong>{" "}
          {text.trim().length > 0
            ? (0.008 * text.split(/\s+/).length).toFixed(2)
            : 0}{" "}
          minutes
        </p>
        <h3 style={{ color: textColor }}>Preview</h3>
        <p
          className="border p-3"
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps = {
  heading: "Text Manipulation Tool",
  placeholder: "Enter your text here...",
  mode: "light",
  showAlert: () => {}, // Default to a no-op function
};

TextForm.propTypes = {
  heading: PropTypes.string,
  placeholder: PropTypes.string,
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};
