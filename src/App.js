import React from "react";
import "bulma/css/bulma.css";
import JobContainer from "./containers/job_container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JobContainer />
      </header>
    </div>
  );
}

export default App;
