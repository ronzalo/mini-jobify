import React from "react";

export default function SearchBar(props) {
  let textInput = React.createRef();
  return (
    <div className="field has-addons">
      <div className="control has-background-dark">
        <input
          className="input"
          type="text"
          placeholder="Looking for jobs?"
          ref={textInput}
        />
      </div>
      <div className="control">
        <button
          className="button is-primary"
          type="submit"
          onClick={() => props.searchHandle(textInput.current.value)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
